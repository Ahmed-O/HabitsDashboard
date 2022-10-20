import React from 'react';
import { Flex } from '@chakra-ui/react';
import BlogResource from './BlogResource';
import blogData from '../data/blogData.json';

function Resources() {
  return (
    <Flex gap="10px" flexWrap="wrap">
      <BlogResource />
      {/* <BlogResource />
      <BlogResource /> */}
    </Flex>
  );
}

export default Resources;
