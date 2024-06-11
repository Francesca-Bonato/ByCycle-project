import React, { useState, useEffect, useContext, useMemo } from "react";
import Button from "../components/Button";
import ModalWindow from "../components/ModalWindow";
import { Context } from "../components/LocalData";
import axios from "axios";

const Profile = () => {
  const { user, initialProfile } = useContext(Context);
  const [profile, setProfile] = useState(initialProfile || {});
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(
    profile.description || ""
  );
  const [openModal, setOpenModal] = useState(false);

  // Create updatedUser using useMemo to improve performance
  const updatedUser = useMemo(
    () => ({
      ...user,
      profilePic: profile.profilePicture,
      description: profile.description,
      username: profile.userName,
      firstName: profile.firstName,
      lastName: profile.lastName,
      birth_date: profile.birthDate,
      email: profile.email
    }),
    [profile, user]
  );

  // Update localStorage when profile changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }, [updatedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleDescriptionChange = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      description: newDescription,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            profilePic: reader.result,
          })
        );
      };
      reader.readAsDataURL(file);
      window.location.reload();
    }
  };

  function toggleModal() {
    setOpenModal(!openModal);
  }

  async function upToDatabaseProfile() {
    try {
      const userId = user.id;
      const updatedUser = {
        description: profile.description,
        username: profile.userName,
        firstname: profile.firstName,
        lastname: profile.lastName,
        birth_date: profile.birthDate,
        email: profile.email,
      };
      const response = await axios.put(
        `http://localhost:4000/profile/update/${userId}`,
        updatedUser
      );
      alert(response.data.msg);
    } catch (error) {
      console.error(error.response.data.msg);
      alert(error.response.data.msg);
    }
  }
  return (
    <>
      {openModal ? <ModalWindow onCancel={toggleModal} /> : null}
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg">
        <h1 className="text-center text-neutral-800 font-medium leading-[55px]">
          Profile Settings
        </h1>
        <div className="flex flex-col items-center my-6 ">
          <label htmlFor="profile-picture" className="cursor-pointer">
            <img
              className="w-32 h-32 rounded-full object-cover border border-gray-300"
              src={profile.profilePicture || defaultImage}
              alt="Profile Picture"
            />
            <input
              id="profile-picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">User Name</label>
            <input
              type="text"
              name="userName"
              value={profile.userName || ""}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName || ""}
              disabled={!isEditing}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName || ""}
              disabled={!isEditing}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email || ""}
              disabled={!isEditing}
              onChange={handleChange} 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={
                profile.birthDate
                  ? new Date(profile.birthDate).toISOString().split("T")[0]
                  : ""
              }
              disabled={!isEditing}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Join Date</label>
            <input
              type="date"
              name="joinDate"
              value={
                profile.joinDate
                  ? new Date(profile.joinDate).toISOString().split("T")[0]
                  : ""
              }
              readOnly
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-700">Profile Description</label>
          {isEditing ? (
            <div>
              <textarea
                name="description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          ) : (
            <div>
              <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">
                {profile.description || ""}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center gap-3">
          <Button
            innerText={isEditing ? "Save" : "Edit"}
            className="mt-6"
            onClick={() => {
              if (isEditing) {
                handleDescriptionChange();
                upToDatabaseProfile();
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }
              setIsEditing((editing) => !editing);
            }}
          />
          <Button
            innerText="Delete Profile"
            className=" bg-gray-300 mt-6 "
            onClick={toggleModal}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
