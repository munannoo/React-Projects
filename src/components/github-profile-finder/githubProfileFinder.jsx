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
      <div className="profileContianer">
        <h2 className="githubusername">
          <a href={userData.html_url}>{userData.name}</a>
        </h2>
        <img src={userData.avatar_url} alt="github profile picture" />
        <h3>No of Repositories: {userData.public_repos}</h3>
        <h3>No of Followers: {userData.followers}</h3>
        <h3>No of Fllowing: {userData.followings}</h3>
      </div>
    </div>
  );
}
