import "./css/layout.css";

import Card from "./Components/Card";
import { useState } from "react";

import data from "./data.json";
function App() {
  const dataHolder = data.data;

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <h1>Meet the Team</h1>
      <input
        type="text"
        className="searchBar"
        defaultValue={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="cardContainer">
        {dataHolder
          .filter((member) => {
            const fullName = `${member.first_name} ${member.last_name}`;
            if (searchTerm === "") {
              return member;
            } else if (
              fullName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return member;
            }
            return null;
          })
          .map((user) => (
            <Card
              profPic={user.avatar}
              fName={user.first_name}
              lName={user.last_name}
              email={user.email}
              position={user.position}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
