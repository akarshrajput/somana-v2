"use client";
import { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";

const UpdateUsername = ({ userId, userName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newUsername, setNewUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingCheck, setLoadingCheck] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false); // Track username availability

  // Create a query client instance
  const queryClient = useQueryClient();

  // Function to check username availability
  const checkAvailability = async () => {
    if (!newUsername) {
      setErrorMessage("Please enter a username to check.");
      return;
    }

    try {
      setLoadingCheck(true);
      const checkUserResponse = await axios.get(
        `/api/v1/users/userName/${newUsername}`
      );

      // If the username already exists, set usernameAvailable to false
      if (checkUserResponse.data.status === "success") {
        setErrorMessage("Username already exists. Please choose another one.");
        setUsernameAvailable(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // If the username is not found, it means it's available
        setSuccessMessage("Username is available!");
        setUsernameAvailable(true);
      } else {
        setErrorMessage("Error checking username availability.");
      }
    } finally {
      setLoadingCheck(false);
    }
  };

  const handleUsernameChange = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Check if the username is available before updating
    if (!usernameAvailable) {
      setErrorMessage("Please check username availability first.");
      return;
    }

    if (!newUsername) {
      setErrorMessage("Please enter a new username.");
      return;
    }

    try {
      setLoadingUpdate(true);

      const data = { userName: newUsername };

      // Make the PATCH request to update the username
      const updateResponse = await axios.patch(
        `/api/v1/users/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (updateResponse.data.status === "success") {
        setSuccessMessage("Username updated successfully!");

        // Invalidate the query to refetch the user data
        queryClient.invalidateQueries(["user", userId]);

        setNewUsername(""); // Clear the input
        setUsernameAvailable(false); // Reset availability
      } else {
        setErrorMessage("Failed to update the username. Please try again.");
      }
    } catch (error) {
      console.error("Error updating the username:", error);
      setErrorMessage("Error updating the username. Please try again.");
    } finally {
      setLoadingUpdate(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <p className="bg-stone-100 antialiased px-4 py-1 border rounded-md">
          @{userName}
        </p>
        <Button size="sm" colorScheme="green" onClick={onOpen}>
          Change Username
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="max-w-md mx-auto p-6">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    New Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newUsername}
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                      setErrorMessage(""); // Clear error when typing
                      setSuccessMessage(""); // Clear success when typing
                    }}
                    required
                  />
                </div>

                <div className="flex text-sm space-x-4 mb-4">
                  <button
                    type="button"
                    onClick={checkAvailability}
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                    disabled={loadingCheck || loadingUpdate}
                  >
                    {loadingCheck ? "Checking..." : "Check Availability"}
                  </button>
                  <button
                    onClick={handleUsernameChange}
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                    disabled={!usernameAvailable || loadingUpdate}
                  >
                    {loadingUpdate ? "Updating..." : "Update Username"}
                  </button>
                </div>
              </form>

              {errorMessage && (
                <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="mt-4 text-sm text-green-500">{successMessage}</p>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateUsername;
