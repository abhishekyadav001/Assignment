import { Box, Button, Text, ButtonGroup, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUser } from "../Store/users/action";

function Home() {
  const dispatch = useDispatch();

  const getData = () => {
    console.log("heelo");
    dispatch(getAllUser());
  };
  useEffect(() => {});
  return (
    <div>
      <Stack>
        <Box textAlign={"center"}>
          <Text as={"b"} fontSize={"xxx-large"}>
            Cointab SE-ASSIGNMENT
          </Text>
        </Box>
        <Stack>
          <Button
            w={"fit-content"}
            m={"auto"}
            mt={"10em"}
            p={"20px"}
            variant="solid"
            size={"sm"}
            colorScheme="messenger"
            onClick={getData()}
          >
            All Users
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default Home;
