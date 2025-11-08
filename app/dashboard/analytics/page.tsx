import { BarChart3, TrendingUp, Users, Eye } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Track your marketing performance and insights</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Eye, title: "Total Views", value: "45,231", change: "+12.5%" },
          { icon: Users, title: "Unique Visitors", value: "12,543", change: "+8.2%" },
          { icon: TrendingUp, title: "Conversion Rate", value: "3.24%", change: "+0.5%" },
          { icon: BarChart3, title: "Avg. Session", value: "4m 32s", change: "+1m 12s" },
        ].map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="p-6 rounded-2xl border border-border bg-card">
              <Icon className="text-primary mb-4" size={24} />
              <h3 className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-xs text-green-500">{stat.change}</p>
            </div>
          )
        })}
      </div>

      <div className="p-6 rounded-2xl border border-border bg-card">
        <h2 className="text-xl font-bold mb-4">Analytics Dashboard Coming Soon</h2>
        <p className="text-muted-foreground">Detailed analytics charts and reports will be available here soon.</p>
      </div>
    </div>
  )
}
