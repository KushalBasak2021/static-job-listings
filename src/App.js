import React, { useState } from "react";
import "./App.css";
import source from "./Images/bg-header-desktop.svg";
import Input from "./components/Input/Input";
import JobsContainer from "./components/JobsContainer/JobsContainer";
import Jobs from "./Data.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const keys = ["role", "position", "level", "location", "contract"];
  function search(jobs) {
    return jobs.filter((job) =>
      keys.some((key) =>
        job[key].toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  return (
    <div className="App">
      <div className="top">
        <img src={source} alt="" />
      </div>
      <Input searchText={searchText} setSearchText={setSearchText} />
      <JobsContainer jobs={search(Jobs)} />
    </div>
  );
}

export default App;
