import { useEffect, useState } from "react";
import ListOfSearches from "./filteredSearches.jsx";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setsearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setsearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else setShowDropDown(false);
  }

  console.log(filteredUsers);

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
      {loading ? (
        "loading data please wait..."
      ) : (
        <input
          onChange={handleChange}
          value={searchParam}
          type="text"
          name="search"
          placeholder="search users"
        />
      )}

      {showDropDown ? <ListOfSearches data={filteredUsers} /> : null}
    </div>
  );
}
