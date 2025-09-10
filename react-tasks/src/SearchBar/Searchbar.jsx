import React, { useState, useEffect, useRef } from "react";

function SearchBar() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setAllUsers(data);
      });
  }, []); 

  return (
    <>
      <h1 id="myHeading">Search Bar</h1>
      <div className="myClass">
        
        <input
          type="text"
          id="text"
          placeholder="search here ..."
          ref={inputRef}
          onChange={() => {
            const searchText = inputRef.current.value.toLowerCase();
            const filtered = allUsers.filter(user =>
              user.name.toLowerCase().includes(searchText)
            );
            setUsers(filtered);
          }}
        />

        <button id="myButton" onClick={() => {
          setUsers(allUsers);
          inputRef.current.value = ""; 
        }}>
          Reset
        </button>

        <ul className="myList">
          {users.map(u => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchBar;