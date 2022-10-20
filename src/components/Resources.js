import React from 'react';
import { Flex } from '@chakra-ui/react';
import BlogResource from './BlogResource';

function Resources() {
  return (
    <Flex>
      <BlogResource />
      <BlogResource />
      <BlogResource />
    </Flex>
  );
}

export default Resources;
