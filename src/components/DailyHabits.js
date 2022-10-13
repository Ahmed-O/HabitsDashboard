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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from '@chakra-ui/react';
import List from './HabitItem';
import moment from 'moment';

function DailyHabits() {
  const { habitsList } = useSelector(state => state.habitsList);
  const currDate = moment().format('ll');
  return (
    <VStack>
      <Heading>What did you get done today? - {currDate}</Heading>
      <Divider></Divider>
      <CheckboxGroup colorScheme="green">
        <Flex justify="space-between" direction="column">
          {habitsList.map(habit => {
            const { id, title, unit, value } = habit;
            return (
              <Flex alignItems="stretch" gap="10px">
                <Text fontSize="xl">{`${title} - `}</Text>
                <NumberInput width="75px" height="50px">
                  <NumberInputField
                    placeholder="0"
                    textAlign="center"
                    fontSize="xl"
                    height="30px"
                  />
                </NumberInput>
                <Text fontSize="xl">{`/ ${value} ${unit}`}</Text>
              </Flex>
              // <Flex>
              //   <Text fontSize="xl">{`${title} - ${value} ${unit}`}</Text>
              //   <Text fontSize="xl">
              //     {`${title} - ${value} ${unit}`}
              //     <NumberInput width="75px">
              //       <NumberInputField placeholder="0" />
              //       <NumberInputStepper>
              //         <NumberIncrementStepper />
              //         <NumberDecrementStepper />
              //       </NumberInputStepper>
              //     </NumberInput>
              //   </Text>
              // </Flex>
            );
          })}
        </Flex>
      </CheckboxGroup>
    </VStack>
  );
}

export default DailyHabits;
