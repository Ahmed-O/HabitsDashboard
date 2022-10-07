import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiSemiClosedEye } from 'react-icons/gi';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { targetLogo } from '../images/targetLogo';
import { MOUNTAIN_BG } from './HeroBackground';
import { Link as RouterLink } from 'react-router-dom';

const Links = ['Dashboard', 'Resources', 'FAQ'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.1000', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ base: 'flex', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={'center'}>
            {/* <Box>Logo</Box> */}
            <Box
              //fontSize="6xl"
              //color={useColorModeValue('green.900', 'green.400')}
              p="5"
              backgroundImage={targetLogo}
              minH="64px"
              w="192px"
            >
              {/* <GiSemiClosedEye /> */}
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              fontSize="1.25rem"
            >
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <RouterLink to="/sidebar">
              <Button variant={'solid'} colorScheme={'teal'} size={'lg'} mr={3}>
                Demo
              </Button>
            </RouterLink>
            <RouterLink to="/signin">
              <Button variant={'solid'} bgColor={'white'} size={'lg'} mr={3}>
                Sign In
              </Button>
            </RouterLink>
            <RouterLink to="/signup">
              <Button variant={'solid'} colorScheme={'teal'} size={'lg'} mr={3}>
                Sign Up
              </Button>
            </RouterLink>
            {/* <ColorModeSwitcher mr={7} /> */}
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
