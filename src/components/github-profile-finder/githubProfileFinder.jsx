import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [error, setError] = useState("");
  const [userName, setUsername] = useState("munannoo");
  const [userData, setuserData] = useState([]);

  async function findProfile(userName) {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if (data) {
        setuserData(data);
        console.log(userData, "d");
      }
    } catch (e) {
      console.log(e.error);
    }
  }

  function handleDisplayUserProfile() {}

  useEffect(() => {
    findProfile(userName);
  }, []);

  return (
    <div className="profile-finder-container">
      <input
        type="text"
        className="getUserName"
        placeholder="Entere a github username.."
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleDisplayUserProfile}>Search 🔎</button>
      <div className="profileContianer"></div>
    </div>
  );
}
