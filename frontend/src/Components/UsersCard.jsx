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
import React from "react";

function UsersCard({ data }) {
  console.log(data);
  const {
    name,
    email,
    phone,
    website,
    address: { city },
  } = data;
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
            <Button variant="solid" colorScheme="blue">
              Open
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default UsersCard;
