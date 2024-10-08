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
        setUsername("");
      }
    } catch (e) {
      console.log(e.error);
    }
  }

  function handleDisplayUserProfile() {
    findProfile(userName);
  }

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
        <img
          className="userProfilePicture"
          src={userData.avatar_url}
          alt="github profile picture"
        />
        <h1 className="githubusername">
          <a href={userData.html_url} target="_blank">
            {userData.name}
          </a>
        </h1>
        <h3>
          No of Repositories: <span>{userData.public_repos}</span>
        </h3>
        <h3>
          No of Followers: <span>{userData.followers}</span>
        </h3>
        <h3>
          No of Following: <span>{userData.following}</span>
        </h3>
      </div>
    </div>
  );
}
