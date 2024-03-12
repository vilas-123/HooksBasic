import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState([])
   
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://httpbin.org/get");
        const data = await response.json();
        console.log(data);
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
   
  const handleEditClick = () => {
    
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleUpdateClick = () => {
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setIsEditing(false);
        console.log("Update successful");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      <div>
        <h2>User Profile</h2>
        {isEditing ? (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userProfile.name}
              onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
            />
            <br />
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={userProfile.email}
              onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
            />
            <br />
            <label>Phone Number:</label>
            <input
              type="text"
              name="number"
              value={userProfile.number}
              onChange={(e) => setUserProfile({ ...userProfile, number: e.target.value })}
            />
            <br />
            <button onClick={handleUpdateClick}>Update</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <div>
            Name: {userProfile.name}<br/>
            email: {userProfile.email}<br/>
            Phonenumber: {userProfile.number}<br/>
            
            <button onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
