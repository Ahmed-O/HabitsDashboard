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

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Hero from './components/Hero';
import SignIn from './components/SignIn';
import {
  HERO_BACKGROUND,
  MOUNTAIN_BG,
  BEARVBULL_BG,
  BEARVBULL_BG2,
  BEARVBULL_BG3,
  CHARTS_BG,
  CHARTS_BG2,
} from './components/HeroBackground';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Box
        backgroundImage={MOUNTAIN_BG}
        backgroundAttachment="fixed"
        backgroundSize="cover"
      >
        <Navbar />
        <Hero />
      </Box> */}
      <SignIn />
    </ChakraProvider>
  );
}

export default App;
