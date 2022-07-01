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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Hero from './components/Hero';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SideBar from './components/SideBar';
import TradesTable from './components/TradesTable';
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
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Box
                backgroundImage={MOUNTAIN_BG}
                backgroundAttachment="fixed"
                backgroundSize="cover"
              >
                <Navbar />
                <Hero />
              </Box>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}

      {/* <SideBar /> */}
      <TradesTable />
    </ChakraProvider>
  );
}

export default App;
