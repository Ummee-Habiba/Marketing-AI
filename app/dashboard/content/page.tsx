import { FileText, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Content Management</h1>
          <p className="text-muted-foreground">Create and manage your marketing content</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent">
          <Plus size={20} className="mr-2" />
          Create Content
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all">
            <FileText className="text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-2">Content Item {item}</h3>
            <p className="text-sm text-muted-foreground mb-4">Sample content description goes here</p>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
