import React, { useEffect, useState } from "react";
import { Button, Container, Flex, Stack, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BulkAdd, checkDBposts, downloadInexcel, getPosts } from "../Store/posts/action";
import PostsCard from "../Components/PostsCard";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import fileDownload from "js-file-download";

const Postpage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { allPosts, usersPostexist, successMessage, errorMessage, isLoading } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  const toast = useToast();
  const [bulkAdd, setBulkAdd] = useState(usersPostexist);
  const handleBulkAdd = () => {
    dispatch(BulkAdd(allPosts))
      .then((res) => {
        toast({
          title: successMessage || "all user data successfully fetched",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: errorMessage || "Something Internal Error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  // Implemented logic to initiate download of Excel file containing user posts
  const handleDownloadExcel = async (userId) => {
    try {
      const api = process.env.REACT_APP_API;
      window.location.href = api + `post/${userId}/download-excel/`;
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };
  useEffect(() => {
    dispatch(getPosts(userId))
      .then((res) => {
        toast({
          title: successMessage || "all user data successfully fetched",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: errorMessage || "Something Internal Error",
          status: "fail",
          duration: 3000,
          isClosable: true,
        });
      });
    dispatch(checkDBposts(userId))
      .then((res) => {
        setBulkAdd(usersPostexist);
        toast({
          title: successMessage || "user exist or not checked",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: errorMessage || "Something Internal Error",
          status: "fail",
          duration: 3000,
          isClosable: true,
        });
      });
  }, [dispatch, userId]);
  return (
    <Container maxW="container.lg" mt={13} mb={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          All Users Post
        </Text>
        {!bulkAdd && (
          <Button colorScheme="blue" onClick={handleBulkAdd}>
            Bulk Add
          </Button>
        )}
        {bulkAdd && <Button onClick={() => handleDownloadExcel(userId)}>Download in Excel</Button>}
      </Flex>
      <Stack>
        {allPosts &&
          allPosts.map((el, i) => {
            return <PostsCard key={i} data={el} />;
          })}
      </Stack>
    </Container>
  );
};

export default Postpage;
