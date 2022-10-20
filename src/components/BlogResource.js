//import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Link,
} from '@chakra-ui/react';

function BlogResource(blogData) {
  const {
    authorImage,
    authorName,
    blogImage,
    blogName,
    date,
    description,
    link,
    type,
  } = blogData.blogData;
  return (
    <Center py={6}>
      <Box
        minW={{ base: '350px', md: '450px' }}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'300px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          overflow={'hidden'}
        >
          <Image src={blogImage} objectFit="contain" />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {type}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {blogName}
          </Heading>
          <Text color={'gray.500'}>{description}</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={authorImage} alt={'Author'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{authorName}</Text>
            <Text color={'gray.500'}>
              {date} ·{' '}
              <Link href={link} color={'blue.500'} isExternal>
                Read More
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default BlogResource;
