import { useState } from "react";
import Faq from "../components/Faq";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [showSidebar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!showSidebar);
  };

  return (
    <div>
      <Navbar showSidebar={showSidebar} handleSideBar={handleSideBar} />
      <h1>ini homepage</h1>
      <Faq />
    </div>
  );
};

export default HomePage;
