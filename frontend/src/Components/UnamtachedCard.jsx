import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getAllUser, postUser } from "../Store/users/action";
function UnamtachedCard({ data }) {
  const dispatch = useDispatch();
  const { matchedUsers } = useSelector((store) => store.auth);
  const {
    name,
    email,
    phone,
    website,
    address: { city },
    id,
  } = data;

  const addHandle = () => {
    dispatch(postUser({ data }))
      .then((res) => {
        dispatch(getAllUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Fetching users from the specified API when component mounts
  }, []);

  // Check if the user is already in the database

  return (
    <GridItem>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">User Information</Heading>
            <Text>Name:- {name}</Text>
            <Text>Email:- {email}</Text>
            <Text>Phone:- {phone}</Text>
            <Text>Website:- {website}</Text>
            <Text>City:- {city}</Text>
            <Text>Company:- {data.company.name}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={addHandle}>
              Add
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default UnamtachedCard;
