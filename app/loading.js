import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="lg"
      />
    </div>
  );
}
