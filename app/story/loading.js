import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
export default function Loading() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[700px]">
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="50px" />
          <Skeleton height="400px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" className="mt-20" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </div>
    </div>
  );
}
