import { Button, HStack, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../Store/users/action";

function SingleUserPage(props) {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((store) => store.auth);
  const [singleUserinfo, setSingleUserinfo] = useState({});
  useEffect(() => {
    if (!allUsers) {
      dispatch(getAllUser());
    } else {
    }
  }, [allUsers]);

  return (
    <div>
      <Stack>
        <HStack>
          <Button>Bulk Add</Button>
          <Button>Download In excel</Button>
        </HStack>
      </Stack>
    </div>
  );
}

export default SingleUserPage;
