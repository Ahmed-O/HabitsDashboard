import React, { useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiDownload,
} from 'react-icons/fi';
import { GiSemiClosedEye } from 'react-icons/gi';
import { AiOutlineTable } from 'react-icons/ai';
import TradesTable from './TradesTable';
import Home from './Home';
import Reports from './Reports';
import Import from './Import';
import View from './View';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Reports', icon: FiTrendingUp },
  { name: 'View', icon: AiOutlineTable },
  { name: 'Import', icon: FiDownload },
];

const LinkComponents = [<Home />, <Reports />, <View />, <Import />];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <Stack direction={{ base: 'column', md: 'row' }} maxW={'100vw'}>
      <Box bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent
          onClose={() => onClose}
          setCurrIndex={setCurrIndex}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} setCurrIndex={setCurrIndex} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }}>{children}</Box>
      </Box>
      {LinkComponents[currIndex]}
    </Stack>
  );
}

const SidebarContent = ({ onClose, setCurrIndex, ...rest }) => {
  function changePage(pageName) {
    if (pageName === 'Home') setCurrIndex(0);
    else if (pageName === 'Reports') setCurrIndex(1);
    else if (pageName === 'View') setCurrIndex(2);
    else if (pageName === 'Import') setCurrIndex(3);
    onClose();
  }
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent={{ base: 'space-between', md: 'center' }}
        my={5}
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Box
            fontSize="6xl"
            color={useColorModeValue('green.900', 'green.400')}
          >
            <GiSemiClosedEye />
          </Box>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => changePage(link.name)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        my="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontSize="24"
        fontWeight="500"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="24"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        <Box fontSize="4xl" color={useColorModeValue('green.900', 'green.400')}>
          <GiSemiClosedEye />
        </Box>
      </Text>
    </Flex>
  );
};
