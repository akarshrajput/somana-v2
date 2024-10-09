"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Kbd,
} from "@chakra-ui/react";

import { MagnifyingGlass } from "@phosphor-icons/react";
import GlobalSearch from "./GlobalSearch";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className="bg-stone-200 border border-stone-300 p-1 rounded-md px-2 font-semibold flex items-center gap-1"
        onClick={onOpen}
      >
        <MagnifyingGlass weight="bold" />
        Search
        <span>
          <Kbd>shift</Kbd> + <Kbd>H</Kbd>
        </span>
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GlobalSearch />
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
