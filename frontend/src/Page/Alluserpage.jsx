import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UsersCard from "../Components/UsersCard";
import { useSelector } from "react-redux";

function Alluserpage() {
  const { allUsers } = useSelector((store) => store.auth);

  return (
    <div>
      <Box textAlign={"center"}>
        <Text as={"b"} m={"auto"} fontSize={"3.5rem"}>
          All Users
        </Text>
      </Box>
      <Grid>
        {allUsers.map((el, i) => {
          return <UsersCard key={i} props={el} />;
        })}
      </Grid>
    </div>
  );
}

export default Alluserpage;
