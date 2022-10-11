import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import DailyHabits from './DailyHabits';
import HeatmapCalendar from './HeatmapCalendar';

function Home() {
  return (
    <>
      <HeatmapCalendar />
      <DailyHabits />
    </>
  );
  // return <HeatmapCalendar />;
}

export default Home;
