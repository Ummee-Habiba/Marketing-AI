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

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return Response.json({ error: "Email and password are required" }, { status: 400 })
    }

    const users = await readDatabase()
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return Response.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // In production, create a proper session/JWT token
    const response = Response.json(
      {
        message: "Login successful",
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
        },
      },
      { status: 200 },
    )

    // Set a simple cookie (in production, use httpOnly and secure flags)
    response.headers.set("Set-Cookie", `user_id=${user.id}; Path=/; Max-Age=86400; SameSite=Lax`)

    return response
  } catch (error) {
    console.error("Login error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
