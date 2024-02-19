import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function PostsCard({ data }) {
  const { name, company } = useSelector((store) => store.post);
  const { title, body } = data;

  return (
    <Stack align={"center"} mt={"10px"} border={"1px solid black"} borderWidth={"2px"} borderRadius={"10px"}>
      <Text as={"b"} size={"1rem"}>
        Name:- {name}
      </Text>
      <Text as={"u"} size={"1rem"}>
        Title:- {title}
      </Text>
      <Text noOfLines={2}>Body:- {body}</Text>
      <Text as={"b"} size={"1rem"}>
        Company Name:- {company.name}
      </Text>
      <Text>Company catchP:- {company.catchPhrase}</Text>
      <Text>company bs:- {company.bs}</Text>
    </Stack>
  );
}

export default PostsCard;
