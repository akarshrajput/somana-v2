"use client";
import { signInAction, signInGithub, signInReddit } from "@/app/_lib/actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Lock } from "@phosphor-icons/react/dist/ssr";

const LoginBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="font-semibold py-1 px-2 bg-stone-800 text-stone-50 rounded-md"
      >
        Log in
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="flex items-center gap-2">
            <Lock weight="fill" className="text-green-600" /> Login to Somana
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col w-full items-center">
              <div className="flex w-full gap-4 flex-col items-center  p-8 rounded-md">
                <div className="flex w-full font-semibold flex-col items-center gap-2">
                  <form className="w-full" action={signInAction}>
                    <button className="flex justify-center w-full items-center   bg-gray-100 py-3 rounded-md border border-stone-200 ">
                      <div className="flex items-center gap-2">
                        <img src="/login-google-logo.png" className="h-6" />
                        Google
                      </div>
                    </button>
                  </form>
                  <form className="w-full" action={signInGithub}>
                    <button className="flex justify-center w-full items-center  bg-gray-100 py-3 rounded-md border border-gray-200 ">
                      <div className="flex items-center gap-2">
                        <img src="/login-github-logo.png" className="h-6" />
                        GitHub
                      </div>
                    </button>
                  </form>

                  <form className="w-full">
                    <button
                      disabled={true}
                      className="flex justify-center w-full items-center bg-stone-100 py-3 rounded-md border border-stone-200"
                    >
                      <div className="flex items-center gap-2">
                        <img src="/login-facebook-logo.webp" className="h-6" />
                        FaceBook
                      </div>
                    </button>
                  </form>
                  {/* <form className="w-full" action={signInReddit}>
                    <button className="flex justify-center w-full items-center  bg-gray-100 py-3 rounded-md border border-gray-200 ">
                      <div className="flex items-center gap-2">
                        <img src="/login-github-logo.png" className="h-6" />
                        Reddit
                      </div>
                    </button>
                  </form> */}
                </div>
              </div>
            </div>
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
export default LoginBtn;
