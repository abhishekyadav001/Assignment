import { Box, Button, Text, ButtonGroup, Stack, Toast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../Store/users/action";
import Alluserpage from "./Alluserpage";

function Home() {
  const dispatch = useDispatch();
  const { successMessage, errorMessage } = useSelector((store) => store.auth);
  const getData = () => {
    dispatch(getAllUser())
      .then((res) => {
        Toast({
          title: successMessage || "all user data successfully fetched",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        Toast({
          title: errorMessage || "Something Internal Error",
          status: "fail",
          duration: 3000,
          isClosable: true,
        });
      });
  };

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
            onClick={getData}
          >
            All Users
          </Button>
        </Stack>
        <Stack>
          <Alluserpage />
        </Stack>
      </Stack>
    </div>
  );
}

export default Home;
