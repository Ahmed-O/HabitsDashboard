import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Heading,
  VStack,
  HStack,
  Code,
  Grid,
  Image,
  Stack,
  StackDivider,
  Icon,
  Button,
  Center,
  useColorModeValue,
  Flex,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { FaBeer } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HStack h="100%" w="100%">
        <Image src="images/signinhero.png" w="50%"></Image>
        <VStack>
          <Stack spacing={4}>
            <Heading>Trader Dashboard</Heading>
            <Text color={'gray.800'} fontSize={'lg'}>
              Join Now!
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
            >
              {/* Google */}
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign up with Google</Text>
                </Center>
              </Button>
              {/* Facebook */}
              <Button
                w={'full'}
                colorScheme={'facebook'}
                leftIcon={<FaFacebook />}
              >
                <Center>
                  <Text>Sign Up with Facebook</Text>
                </Center>
              </Button>

              <StackDivider>
                <Center>Already have an account?</Center>
              </StackDivider>
              <Button
                /* flex={1} */
                px={4}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </HStack>
    </ChakraProvider>
  );
}

export default App;
