"use client";
import { RootState } from "@/lib/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../lib/redux/slices/userSlicer";
import Container from "../Container";
import Input from "../Input";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  // State for tracking form data
  const [formData, setFormData] = useState({ username: "", email: "" });

  // Handler for updating user information
  const handleUpdateUser = (e: any) => {
    e.preventDefault();

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Invalid email format");
      return;
    }

    // Dispatching setUser action to update the state with new user data
    dispatch(setUser({ ...user, ...formData }));

    // Resetting form data after submission
    setFormData({ username: "", email: "" });
  };

  return (
    <Container>
      <form className="flex w-full flex-col gap-4" onSubmit={handleUpdateUser}>
        {/* User Profile Section */}
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        {/* Input fields for updating username and email */}
        <Input
          className="bg-white bg-opacity-5 text-gray-400"
          placeholder="Enter User Name"
          type="text"
          value={formData.username}
          onChange={(e: any) =>
            setFormData({ ...formData, username: e.target.value })
          }
          name="username"
        />
        <Input
          className="bg-white bg-opacity-5 text-gray-400"
          placeholder="Enter Email"
          type="mail"
          value={formData.email}
          onChange={(e: any) =>
            setFormData({ ...formData, email: e.target.value })
          }
          name="email"
        />
        {/* Button to trigger the update */}
        <button type="submit">Update User</button>
      </form>
    </Container>
  );
};

export default UserProfile;
