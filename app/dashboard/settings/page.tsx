"use client"

import { useState, useEffect } from "react"
import { User, Bell, Lock, Palette, Shield, Trash2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/app/theme-provider"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const { isDarkMode, setIsDarkMode } = useTheme()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Profile settings state
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)
  const [weeklyReports, setWeeklyReports] = useState(true)

  // Security settings state
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      setUser(user)
      setFullName(user.user_metadata?.full_name || "")
      setEmail(user.email || "")
    }
  }

  const handleProfileUpdate = async () => {
    setLoading(true)
    const supabase = createClient()

    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName },
    })

    if (error) {
      alert("Error updating profile: " + error.message)
    } else {
      alert("Profile updated successfully!")
      loadUserData()
    }
    setLoading(false)
  }

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters!")
      return
    }

    setLoading(true)
    const supabase = createClient()

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) {
      alert("Error changing password: " + error.message)
    } else {
      alert("Password changed successfully!")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="space-y-8">
        {/* Theme Settings */}
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <Palette className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Appearance</h3>
              <p className="text-sm text-muted-foreground">Customize how the dashboard looks</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <Label htmlFor="theme-toggle" className="text-base font-medium">
                  Dark Mode
                </Label>
                <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
              </div>
              <Switch id="theme-toggle" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <User className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Profile Settings</h3>
              <p className="text-sm text-muted-foreground">Update your personal information</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" value={email} disabled className="mt-2 bg-muted" />
              <p className="text-xs text-muted-foreground mt-1">Email cannot be changed</p>
            </div>

            <Button onClick={handleProfileUpdate} disabled={loading} className="mt-4">
              <Save size={16} className="mr-2" />
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <Bell className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Notifications</h3>
              <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <Label htmlFor="email-notif" className="text-base font-medium">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Switch id="email-notif" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <Label htmlFor="marketing" className="text-base font-medium">
                  Marketing Emails
                </Label>
                <p className="text-sm text-muted-foreground">Receive updates about new features</p>
              </div>
              <Switch id="marketing" checked={marketingEmails} onCheckedChange={setMarketingEmails} />
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <Label htmlFor="reports" className="text-base font-medium">
                  Weekly Reports
                </Label>
                <p className="text-sm text-muted-foreground">Get weekly analytics summary</p>
              </div>
              <Switch id="reports" checked={weeklyReports} onCheckedChange={setWeeklyReports} />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <Lock className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Security</h3>
              <p className="text-sm text-muted-foreground">Change your password and security settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="mt-2"
              />
            </div>

            <Button
              onClick={handlePasswordChange}
              disabled={loading || !newPassword || !confirmPassword}
              className="mt-4"
            >
              <Shield size={16} className="mr-2" />
              {loading ? "Updating..." : "Update Password"}
            </Button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="p-6 rounded-2xl border border-destructive/50 bg-destructive/5 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10">
              <Trash2 className="text-destructive" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-destructive">Danger Zone</h3>
              <p className="text-sm text-muted-foreground">Irreversible actions</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background border border-destructive/20">
              <h4 className="font-medium mb-2">Delete Account</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive" size="sm">
                Delete My Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
