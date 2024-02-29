import { Box, Grid, Text, Toast } from "@chakra-ui/react";
import UsersCard from "../Components/UsersCard";
import UnamtachedCard from "../Components/UnamtachedCard";
import { useSelector } from "react-redux";

function Alluserpage() {
  const { matchedUsers, unmatchedUsers } = useSelector((store) => store.auth);

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
