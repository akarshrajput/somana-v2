"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Trash } from "@phosphor-icons/react";
import { Button, Spinner } from "@chakra-ui/react";

const DeleteButton = ({ blogId, onDeleteSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!blogId) {
      toast.error("Blog ID is required");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/v1/blogs/${blogId}`);
      if (response.status === 200) {
        router.push("/");
        if (onDeleteSuccess) {
          onDeleteSuccess();
        } else {
          router.reload();
        }
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button colorScheme="red" disabled={isLoading} onClick={handleDelete}>
      {isLoading ? (
        <Spinner size="sm" />
      ) : (
        <div className="flex items-center gap-1">
          <p>Delete</p>
          <Trash weight="bold" />
        </div>
      )}
    </Button>
  );
};

export default DeleteButton;
