import { Megaphone, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CampaignsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Campaigns</h1>
          <p className="text-muted-foreground">Manage your marketing campaigns</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent">
          <Plus size={20} className="mr-2" />
          New Campaign
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { name: "Summer Sale 2024", status: "Active", leads: 234 },
          { name: "Product Launch", status: "Active", leads: 156 },
          { name: "Email Newsletter", status: "Scheduled", leads: 89 },
          { name: "Social Media Boost", status: "Completed", leads: 445 },
        ].map((campaign, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <Megaphone className="text-primary" size={32} />
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  campaign.status === "Active"
                    ? "bg-green-500/10 text-green-500"
                    : campaign.status === "Scheduled"
                      ? "bg-blue-500/10 text-blue-500"
                      : "bg-gray-500/10 text-gray-500"
                }`}
              >
                {campaign.status}
              </span>
            </div>
            <h3 className="font-semibold mb-2">{campaign.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{campaign.leads} leads generated</p>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
