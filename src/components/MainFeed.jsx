import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat, Bookmark } from "lucide-react";

const MainFeed = ({ saveTweet, savedTweets }) => {
  const [tweetContent, setTweetContent] = useState("");
  const [tweets, setTweets] = useState([
    { id: 1, content: "This is a sample tweet content. #TwitterClone", username: "user1", handle: "@user1" },
    { id: 2, content: "Another sample tweet. React is awesome!", username: "user2", handle: "@user2" },
    { id: 3, content: "Building a Twitter clone with React and Tailwind.", username: "user3", handle: "@user3" },
  ]);

  const handleTweet = () => {
    if (tweetContent.trim()) {
      const newTweet = {
        id: tweets.length + 1,
        content: tweetContent,
        username: "Current User",
        handle: "@currentuser",
      };
      setTweets([newTweet, ...tweets]);
      setTweetContent("");
    }
  };

  const handleSaveTweet = (tweet) => {
    saveTweet(tweet);
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container py-6">
        <Card className="mb-6">
          <div className="p-4">
            <Textarea
              placeholder="What's happening?"
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
            />
            <div className="mt-4 flex justify-between items-center">
              <div>{/* Add tweet options here */}</div>
              <Button onClick={handleTweet}>Tweet</Button>
            </div>
          </div>
        </Card>
        <div className="space-y-4">
          {tweets.map((tweet) => (
            <Card key={tweet.id} className="p-4">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={`https://avatar.vercel.sh/${tweet.username}`} />
                  <AvatarFallback>{tweet.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{tweet.username}</h3>
                    <span className="text-sm text-gray-500">{tweet.handle}</span>
                  </div>
                  <p>{tweet.content}</p>
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
                    <Button variant="ghost" size="sm" onClick={() => handleSaveTweet(tweet)}>
                      <Bookmark className="mr-2 h-4 w-4" />
                      Save
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