import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainFeed from "../components/MainFeed";
import RightSidebar from "../components/RightSidebar";

const TwitterLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [savedTweets, setSavedTweets] = useState([]);

  useEffect(() => {
    const storedTweets = localStorage.getItem('savedTweets');
    if (storedTweets) {
      setSavedTweets(JSON.parse(storedTweets));
    }
  }, []);

  const saveTweet = (tweet) => {
    const updatedTweets = [...savedTweets, tweet];
    setSavedTweets(updatedTweets);
    localStorage.setItem('savedTweets', JSON.stringify(updatedTweets));
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 md:ml-72">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex">
          <MainFeed saveTweet={saveTweet} savedTweets={savedTweets} />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default TwitterLayout;