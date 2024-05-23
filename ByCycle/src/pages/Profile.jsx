import Button from "../components/Button";
import { useState } from "react";

const initialProfile = {
  username: "Francesco_B",
  firstName: "Francesco",
  lastName: "Balleri",
  email: "fra@email.it",
  birthDate: "1994-11-21",
  joinDate: "2024-05-23",
  description: "This is a short description about Francesco.",
  profilePicture: "https://via.placeholder.com/150",
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(profile.description);

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
    setEditing(false);
  };

  const handleDelete = () => {
    // Implement delete functionality as needed
    alert("Profile deleted");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10 mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Profile Settings
      </h2>
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src={profile.profilePicture}
          alt="Profile"
        />
        <input
          type="file"
          accept="image/*"
          className="mt-4"
          onChange={(e) => {
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
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        {editing ? (
          <div>
            <textarea
              name="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
            <div className="flex justify-center">
              <Button
                innerText="Save"
                className=" mt-6"
                onClick={handleDescriptionChange}
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100">
              {profile.description}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <Button
          innerText="Edit"
          className=" mt-6"
          onClick={() => setEditing(true)}
        />
        <Button
          innerText="Delete Profile"
          className=" bg-gray-300 mt-6 "
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Profile;
