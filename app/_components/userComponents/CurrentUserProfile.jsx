"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";

const CurrentUserProfile = ({ session }) => {
  const userId = session.user.userId;
  const toast = useToast();

  const [user, setUser] = useState({
    name: "",
    email: "",
    photo: "",
    mobileNumber: "",
    bio: "",
    status: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    qualification: "",
    studiedFrom: "",
    nickname: "",
    maritalStatus: "",
    company: "",
    subscription: false,
    dob: "",
    accountType: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`/api/v1/users/${userId}`);
          const userData = response.data.data;
          setUser({
            accountType: userData.accountType,
            name: userData.name,
            userName: userData.userName,
            email: userData.email,
            photo: userData.photo,
            mobileNumber: userData.mobileNumber,
            bio: userData.bio,
            status: userData.status,
            gender: userData.gender,
            city: userData.city,
            state: userData.state,
            country: userData.country,
            occupation: userData.occupation,
            qualification: userData.qualification,
            studiedFrom: userData.studiedFrom,
            nickname: userData.nickname,
            maritalStatus: userData.maritalStatus,
            company: userData.company,
            subscription: userData.subscription,
            dob: userData.dob,
          });
          console.log(response);
          setLoading(false);
        } catch (error) {
          setError("Error fetching user data");
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.patch(`/api/v1/users/${userId}`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast({
        title: "Success!",
        description: "User data updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Fail!",
        description: "User data not updated.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="lg"
        />
      </div>
    );
  if (error) {
    toast({
      title: "Error",
      description: "Facing error!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="customised-input flex flex-col text-sm gap-4 rounded-md w-full"
      >
        <img
          src={user.photo}
          alt={`${user.name}'s profile`}
          className="w-36 h-36 rounded-lg border-4 border-stone-300"
        />
        <p>{user.userName}</p>
        <div className="flex items-center gap-2">
          <p className="bg-stone-100 antialiased px-4 py-1 border rounded-md">
            {user.name}
          </p>
          <p className="bg-stone-100  antialiased px-4 py-1 border rounded-md ">
            {user.email}
          </p>
          <p className="bg-stone-100 antialiased px-4 py-1 border rounded-md ">
            Subscription : {user.subscription ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex flex-col gap-1">
            <span className="text-gray-700 ">Bio</span>
            <textarea
              name="bio"
              rows={4}
              value={user.bio}
              onChange={handleInputChange}
              className="bg-stone-100 resize-none  antialiased px-2 py-1.5 border rounded-md"
            />
          </label>
          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Mobile Number</span>
              <input
                type="text"
                name="mobileNumber"
                value={user.mobileNumber}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Status</span>
              <input
                type="text"
                name="status"
                value={user.status}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Gender</span>
              <select
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">City</span>
              <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">State</span>
              <input
                type="text"
                name="state"
                value={user.state}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Country</span>
              <input
                type="text"
                name="country"
                value={user.country}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Occupation</span>
              <input
                type="text"
                name="occupation"
                value={user.occupation}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Qualification</span>
              <input
                type="text"
                name="qualification"
                value={user.qualification}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Studied From</span>
              <input
                type="text"
                name="studiedFrom"
                value={user.studiedFrom}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Nickname</span>
              <input
                type="text"
                name="nickname"
                value={user.nickname}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Marital Status</span>
              <select
                type="text"
                name="maritalStatus"
                value={user.maritalStatus}
                onChange={handleInputChange}
                className="bg-stone-100 
                antialiased px-2 py-1 border rounded-md"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="relationship">Relationship</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Company</span>
              <input
                type="text"
                name="company"
                value={user.company}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Date of Birth</span>
              <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleInputChange}
                className="bg-stone-100  antialiased px-2 py-1 border rounded-md"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-700 ">Account Type</span>
              <select
                type="text"
                name="accountType"
                value={user.accountType}
                onChange={handleInputChange}
                className="bg-stone-100 
                antialiased px-2 py-1 border rounded-md"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Personal">Personal</option>
                <option value="Organization">Organization</option>
              </select>
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 w-fit text-stone-50 py-2 px-4 rounded-md mt-4"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default CurrentUserProfile;
