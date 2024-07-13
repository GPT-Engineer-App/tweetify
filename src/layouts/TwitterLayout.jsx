import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainFeed from "../components/MainFeed";
import RightSidebar from "../components/RightSidebar";

const TwitterLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex">
          <MainFeed />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default TwitterLayout;