import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import data from '../data/heatmapData.json';
import { Flex, VStack } from '@chakra-ui/react';

function HeatmapCalendar() {
  return (
    <Flex
      height={{ sm: '200px', md: '300px' }}
      minW="375px"
      w="100%"
      align={'left'}
    >
      <ResponsiveCalendar
        data={data}
        from="2022-01-02"
        to="2022-12-31"
        emptyColor="#eeeeee"
        // colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        colors={['#E2E8F0', '#C6F6D5', '#68D391', '#48BB78', '#2F855A']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </Flex>
  );
}

export default HeatmapCalendar;
