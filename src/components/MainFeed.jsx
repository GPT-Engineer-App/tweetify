import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat } from "lucide-react";

const MainFeed = () => {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container py-6">
        <Card className="mb-6">
          <div className="p-4">
            <Textarea placeholder="What's happening?" />
            <div className="mt-4 flex justify-between items-center">
              <div>{/* Add tweet options here */}</div>
              <Button>Tweet</Button>
            </div>
          </div>
        </Card>
        <div className="space-y-4">
          {[1, 2, 3].map((tweet) => (
            <Card key={tweet} className="p-4">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={`https://avatar.vercel.sh/${tweet}`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">User Name</h3>
                    <span className="text-sm text-gray-500">@username</span>
                  </div>
                  <p>This is a sample tweet content. #TwitterClone</p>
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Reply
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Repeat className="mr-2 h-4 w-4" />
                      Retweet
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainFeed;