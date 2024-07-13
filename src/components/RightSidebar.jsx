import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const RightSidebar = () => {
  return (
    <aside className="hidden w-72 flex-shrink-0 border-l lg:block">
      <div className="sticky top-16 p-4 space-y-4">
        <Card className="p-4">
          <h2 className="font-semibold mb-4">What's happening</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((trend) => (
              <div key={trend} className="space-y-1">
                <p className="text-sm text-gray-500">Trending in Tech</p>
                <p className="font-medium">#{`Trend${trend}`}</p>
                <p className="text-sm text-gray-500">10.5K Tweets</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-4">
          <h2 className="font-semibold mb-4">Who to follow</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((user) => (
              <div key={user} className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`https://avatar.vercel.sh/${user}`} />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-gray-500">@username</p>
                </div>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </aside>
  );
};

export default RightSidebar;