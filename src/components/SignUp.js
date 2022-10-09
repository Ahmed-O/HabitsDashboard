import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  Checkbox,
  useColorModeValue,
  Link,
  calc,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import {
  HERO_BACKGROUND,
  MOUNTAIN_BG,
  BEARVBULL_BG,
  BEARVBULL_BG2,
  BEARVBULL_BG3,
  CHARTS_BG,
  CHARTS_BG2,
} from '../images/HeroBackground';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      backgroundImage={BEARVBULL_BG}
      backgroundAttachment="fixed"
      backgroundSize="cover"
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign Up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={{ base: '8', sm: '8' }}
          w={{ base: '300px', sm: 'sm' }}
        >
          <Stack spacing={4}>
            {/* <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack> */}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <Box>
                        <FaEye />
                      </Box>
                    ) : (
                      <Box>
                        <FaEyeSlash />
                      </Box>
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <Box>
                        <FaEye />
                      </Box>
                    ) : (
                      <Box>
                        <FaEyeSlash />
                      </Box>
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
            </Stack>
            <Stack spacing={3} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign Up
              </Button>
              {/* Google */}
              <Button
                w={'full'}
                variant={'outline'}
                leftIcon={<FcGoogle />}
                backgroundColor="white"
              >
                <Center>
                  <Text>Register with Google</Text>
                </Center>
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <RouterLink to="/signin">
                  <Link color={'blue.400'}>Login</Link>
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
