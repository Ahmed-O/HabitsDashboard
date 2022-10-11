import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import DailyHabits from './DailyHabits';
import HeatmapCalendar from './HeatmapCalendar';

function Home() {
  return (
    <Flex direction="column" minH="300px">
      <HeatmapCalendar />
      <DailyHabits />
    </Flex>
  );
  // return <HeatmapCalendar />;
}

export default Home;
