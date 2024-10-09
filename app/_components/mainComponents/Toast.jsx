"use client";
import { useToast } from "@chakra-ui/react";

export function ToastSuccess({
  buttonName = "X",
  title = "X",
  description = "X",
  className,
  status = "success",
}) {
  const toast = useToast();

  return (
    <button
      className={`${className}`}
      onClick={() =>
        toast({
          title: title,
          description: description,
          status: status,
          duration: 8000,
          isClosable: true,
        })
      }
    >
      {buttonName}
    </button>
  );
}
