import { useEffect, useState } from "react";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  async function fetchListofUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchListofUsers();
  }, []);
  return (
    <div className="searchContainer">
      <input type="text" name="search" placeholder="search users" />
    </div>
  );
}
