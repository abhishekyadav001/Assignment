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

function UsersCard(props) {
  return (
    <GridItem>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">User Information</Heading>
            <Text>Name:-{props.name}</Text>
            <Text>Email:-{props.email}</Text>
            <Text>Phone:-{props.phone}</Text>
            <Text>Website:-{props.website}</Text>
            <Text>City:-{props.address.city}</Text>
            <Text>Company:-{props.company.name}</Text>
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
