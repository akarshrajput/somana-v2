"use client";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import react from "react";

const AlertDialogComponent = ({ children = "None" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = react.useRef();

  return (
    <>
      <Button size="sm" colorScheme="red" onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Story
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to permanently delete story.
            </AlertDialogBody>

            <AlertDialogFooter className="flex items-center gap-2">
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              {children}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
export default AlertDialogComponent;
