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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../Store/users/action";
import { useNavigate } from "react-router-dom";

function UsersCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disablingButton, setDisablingButton] = useState(false);
  const { isUserExist } = useSelector((store) => store.auth);
  const {
    name,
    email,
    phone,
    website,
    address: { city },
    id,
  } = data;

  const openHandle = (id) => {
    navigate("/allusers/singleuser");
  };

  const addHandle = (userId) => {
    if (isUserExist) {
      setDisablingButton(true);
    } else {
      dispatch(postUser({ id: userId }));
    }
  };

  useEffect(() => {}, []);

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
            <Button variant="solid" colorScheme="blue" onClick={() => openHandle(id)}>
              Open
            </Button>
            <Button variant="ghost" colorScheme="blue" onClick={() => addHandle(id)} isDisabled={disablingButton}>
              Add
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default UsersCard;
