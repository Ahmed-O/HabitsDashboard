import React from 'react';
import { useSelector } from 'react-redux';
import {
  Text,
  Flex,
  VStack,
  Heading,
  Divider,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import List from './HabitItem';
import moment from 'moment';

function DailyHabits() {
  const { habitsList } = useSelector(state => state.habitsList);
  const currDate = moment().format('ll');
  return (
    <VStack>
      <Heading>{currDate}</Heading>
      <Divider></Divider>
      <CheckboxGroup colorScheme="green">
        <Flex justify="space-between" direction="column">
          {habitsList.map(habit => {
            const { id, title, unit, value } = habit;
            return (
              <Checkbox value={id}>
                <Text fontSize="xl">{`${title} - ${value} ${unit}`}</Text>
              </Checkbox>
            );
          })}
        </Flex>
      </CheckboxGroup>
    </VStack>
  );
}

export default DailyHabits;
