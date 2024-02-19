import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UsersCard from "../Components/UsersCard";
import { useDispatch, useSelector } from "react-redux";
import UnamtachedCard from "../Components/UnamtachedCard";
import { getAllUser } from "../Store/users/action";

function Alluserpage() {
  const { matchedUsers, unmatchedUsers } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser);
  }, [matchedUsers, unmatchedUsers]);
  return (
    <div>
      <Box textAlign={"center"}>
        <Text as={"b"} m={"auto"} fontSize={"3.5rem"}>
          All Users
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {matchedUsers &&
          matchedUsers.map((el, i) => {
            return <UsersCard key={i} data={el} />;
          })}
        {unmatchedUsers &&
          unmatchedUsers.map((el, i) => {
            return <UnamtachedCard key={i} data={el} />;
          })}
      </Grid>
    </div>
  );
}

export default Alluserpage;
