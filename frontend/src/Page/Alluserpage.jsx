import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UsersCard from "../Components/UsersCard";
import { useSelector } from "react-redux";
import { getAllUser } from "../Store/users/action";

function Alluserpage() {
  const { allUsers, allDBusers } = useSelector((store) => store.auth);
  useEffect(() => {}, [getAllUser, allDBusers]);
  return (
    <div>
      <Box textAlign={"center"}>
        <Text as={"b"} m={"auto"} fontSize={"3.5rem"}>
          All Users
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {allUsers.map((el, i) => {
          return <UsersCard key={i} data={el} />;
        })}
      </Grid>
    </div>
  );
}

export default Alluserpage;
