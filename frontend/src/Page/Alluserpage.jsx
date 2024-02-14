import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import UsersCard from "../Components/UsersCard";

function Alluserpage() {
  return (
    <div>
      <Box textAlign={"center"}>
        <Text as={"b"} m={"auto"} fontSize={"3.5rem"}>
          All Users
        </Text>
      </Box>
      <Grid>
        <UsersCard />
      </Grid>
    </div>
  );
}

export default Alluserpage;
