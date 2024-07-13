import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Hash, Bell, Mail, Bookmark, User, MoreHorizontal } from "lucide-react";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-72 border-r bg-background transition-transform sm:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <ScrollArea className="h-full py-6">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Menu
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Hash className="mr-2 h-4 w-4" />
                Explore
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Messages
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bookmark className="mr-2 h-4 w-4" />
                Bookmarks
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                More
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;