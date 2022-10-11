import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import data from '../data/data.json';
import { Flex, VStack } from '@chakra-ui/react';

function HeatmapCalendar() {
  return (
    <Flex minH="500px" minW="100%">
      <ResponsiveCalendar
        data={data}
        from="2022-01-02  "
        to="2022-12-31"
        emptyColor="#eeeeee"
        // colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        colors={['#C6F6D5', '#68D391', '#38A169', '#276749']}
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
