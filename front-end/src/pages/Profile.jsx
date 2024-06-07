import Button from "../components/Button";
import { useState } from "react";
//import axios from "axios";
import ModalWindow from "../components/ModalWindow";
import { useContext } from "react";
import { Context } from "../components/LocalData";

const Profile = () => {
  const { user, initialProfile } = useContext(Context);
  /*  //FARE CUSTOM HOOK DI "user" E "initialProfile" ecc...
  const user = JSON.parse(localStorage.getItem("user"));
  const formattedBirthDate = user.birth_date.split("/").reverse();
  const reorderedDateString = formattedBirthDate.join("-");
  const formattedJoinDate = user.join_date.split("/").reverse();
  const reorderedJoinString = formattedJoinDate.join("-");
  const initialProfile = {
    userName: user && user.username !== null ? user.username : "",
    firstName: user && user.firstName !== null ? user.firstName : "",
    lastName: user && user.lastName !== null ? user.lastName : "",
    email: user && user.email !== null ? user.email : "myUsermail",
    birthDate: user && user.birth_date !== null ? reorderedDateString : "",
    joinDate:
      user && user.join_date !== null ? reorderedJoinString : "Not found",
    description:
      user && user.description !== null
        ? user.description
        : "Write a short description about yourself.",
    profilePicture: defaultProPic,
  }; */
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(profile.description);
  const [openModal, setOpenModal] = useState(false);

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
      };
      reader.readAsDataURL(file);
    }
  };

  function toggleModal() {
    setOpenModal(!openModal);
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
              src={profile.profilePicture}
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
              value={profile.userName}
              onChange={handleChange}
              disabled={isEditing ? true : false}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={profile.birthDate}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Join Date</label>
            <input
              type="date"
              name="joinDate"
              value={profile.joinDate}
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
              {/* <div className="flex justify-center">
              <Button
                innerText="Save"
                className=" mt-6"
                onClick={handleDescriptionChange}
              />
            </div> */}
            </div>
          ) : (
            <div>
              <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">
                {profile.description}
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
