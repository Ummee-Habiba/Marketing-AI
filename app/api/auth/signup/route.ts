import { promises as fs } from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), ".local", "db.json")

interface User {
  id: string
  fullName: string
  email: string
  password: string
  createdAt: string
}

async function readDatabase(): Promise<User[]> {
  try {
    const data = await fs.readFile(dbPath, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeDatabase(users: User[]): Promise<void> {
  const dir = path.dirname(dbPath)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(dbPath, JSON.stringify(users, null, 2))
}

export async function POST(request: Request) {
  try {
    const { fullName, email, password, confirmPassword } = await request.json()

    if (!fullName || !email || !password || !confirmPassword) {
      return Response.json({ error: "All fields are required" }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return Response.json({ error: "Passwords do not match" }, { status: 400 })
    }

    if (password.length < 8) {
      return Response.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    const users = await readDatabase()

    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      return Response.json({ error: "Email already registered" }, { status: 400 })
    }

    // Create new user (in production, password should be hashed)
    const newUser: User = {
      id: Date.now().toString(),
      fullName,
      email,
      password, // WARNING: In production, hash the password
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)
    await writeDatabase(users)

    return Response.json({ message: "User created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Signup error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
