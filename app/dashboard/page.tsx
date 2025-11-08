import { createClient } from "@/lib/supabase/server"
import {
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Target,
  DollarSign,
  Megaphone,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section with Image */}
      <div className="mb-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-blue-500/20 p-8 border border-border">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.user_metadata?.full_name || "User"}!</h1>
            <p className="text-muted-foreground text-lg">
              Here's your marketing dashboard overview. Let's make today productive!
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/professional-woman.png"
              alt="Dashboard"
              className="w-48 h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            icon: BarChart3,
            title: "Total Campaigns",
            value: "12",
            change: "+3 this week",
            changePositive: true,
            color: "from-blue-500 to-cyan-500",
          },
          {
            icon: Users,
            title: "Total Leads",
            value: "1,234",
            change: "+156 this week",
            changePositive: true,
            color: "from-purple-500 to-pink-500",
          },
          {
            icon: Zap,
            title: "Posts Scheduled",
            value: "48",
            change: "+12 this week",
            changePositive: true,
            color: "from-orange-500 to-red-500",
          },
          {
            icon: TrendingUp,
            title: "Engagement Rate",
            value: "45%",
            change: "+5% this week",
            changePositive: true,
            color: "from-green-500 to-emerald-500",
          },
        ].map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <div className="flex items-center gap-1">
                <ArrowUpRight size={16} className="text-green-500" />
                <p className="text-xs text-green-500 font-medium">{stat.change}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-border bg-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {[
              {
                action: 'Campaign "Summer Sale" launched',
                time: "2 hours ago",
                icon: Megaphone,
                color: "text-blue-500",
              },
              {
                action: "Generated 15 new blog posts",
                time: "5 hours ago",
                icon: FileText,
                color: "text-purple-500",
              },
              {
                action: "Scheduled 24 social media posts",
                time: "1 day ago",
                icon: Calendar,
                color: "text-orange-500",
              },
              { action: "Added 45 new leads to CRM", time: "2 days ago", icon: Users, color: "text-green-500" },
            ].map((activity, idx) => {
              const Icon = activity.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h2 className="text-xl font-bold mb-6">Quick Stats</h2>
          <div className="space-y-4">
            {[
              { label: "Revenue This Month", value: "$12,450", icon: DollarSign, color: "text-green-500" },
              { label: "Active Campaigns", value: "8", icon: Target, color: "text-blue-500" },
              { label: "Conversion Rate", value: "3.2%", icon: TrendingUp, color: "text-purple-500" },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-background ${stat.color}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-medium">{stat.label}</span>
                  </div>
                  <span className="text-lg font-bold">{stat.value}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6 rounded-2xl border border-border bg-card">
        <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Generate Content",
              desc: "Create new posts with AI",
              href: "/dashboard/content",
              image: "/ai-marketing-trends.jpg",
            },
            {
              title: "Schedule Posts",
              desc: "Plan your content calendar",
              href: "/dashboard/content",
              image: "/social-media-scheduling.jpg",
            },
            {
              title: "View Analytics",
              desc: "Check performance metrics",
              href: "/dashboard/analytics",
              image: "/marketing-roi-automation.jpg",
            },
            {
              title: "Manage Leads",
              desc: "Update your CRM",
              href: "/dashboard/campaigns",
              image: "/lead-generation-strategies.jpg",
            },
          ].map((action, idx) => (
            <Link
              key={idx}
              href={action.href}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={action.image || "/placeholder.svg"}
                  alt={action.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{action.title}</h3>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
