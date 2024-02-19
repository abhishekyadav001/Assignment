import React, { useEffect } from "react";
import { Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BulkAdd, addDBPosts, getPosts } from "../Store/posts/action";
import PostsCard from "../Components/PostsCard";
import { useParams } from "react-router-dom";

const Postpage = () => {
  const isBulkAddVisible = true;
  const { userId } = useParams();
  const { allPosts } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  const handleBulkAdd = () => {
    dispatch(BulkAdd(userId));
  };

  const handleDownloadExcel = () => {
    // Implement logic to initiate download of Excel file containing user posts
  };
  useEffect(() => {
    console.log(userId);
    dispatch(getPosts(userId));
    console.log(allPosts);
  }, []);
  return (
    <Container maxW="container.lg" mt={13} mb={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          All Users Post
        </Text>
        {isBulkAddVisible && (
          <Button colorScheme="blue" onClick={handleBulkAdd}>
            Bulk Add
          </Button>
        )}
        {!isBulkAddVisible && (
          <Button colorScheme="blue" onClick={handleDownloadExcel}>
            Download in Excel
          </Button>
        )}
      </Flex>
      <Stack>
        {allPosts.map((el, i) => {
          return <PostsCard key={i} data={el} />;
        })}
      </Stack>
    </Container>
  );
};

export default Postpage;
