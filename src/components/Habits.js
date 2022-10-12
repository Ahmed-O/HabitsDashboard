import React, { useState, useEffect } from 'react';
import List from './HabitItem';
import Alert from './HabitAlert';
import {
  Center,
  FormControl,
  Input,
  Button,
  Heading,
  Flex,
  HStack,
  VStack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { removeHabit } from '../redux/habitsList.js';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

// const { habitsList } = useSelector(state => state.habitsList);

function Habits() {
  const { habitsList } = useSelector(state => state.habitsList);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [value, setValue] = useState(10);
  const [unit, setUnit] = useState('');
  // const [list, setList] = useState(getLocalStorage());
  const [list, setList] = useState(habitsList);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [removeID, setRemoveID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  // Modal functions
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !value || !unit) {
      showAlert(true, 'remove', 'Please enter all values');
    } else if (name && value && unit && isEditing) {
      setList(
        list.map(item => {
          if (item.id === editID) {
            return { ...item, title: name, value: value, unit: unit };
          }
          return item;
        })
      );
      setName('');
      setUnit('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'add', 'Habit successfully changed');
    } else {
      showAlert(true, 'add', 'New habit successfully added');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        value: value,
        unit: unit,
      };

      setList([...list, newItem]);
      setName('');
      setUnit('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItemModal = id => {
    setRemoveID(id);
    onOpen();
  };

  const removeItem = () => {
    dispatch(removeHabit({ removeID: removeID }));
    showAlert(true, 'remove', 'Habit successfully removed');
    // setList(list.filter(item => item.id !== removeID));
    //setList(list);
    onClose();
    setRemoveID(null);
  };
  const editItem = id => {
    const specificItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
    setValue(specificItem.value);
    setUnit(specificItem.unit);
  };
  useEffect(() => {
    console.log('In use effect');
    // localStorage.setItem('list', JSON.stringify(list));
    setList(habitsList);
  }, [habitsList]);
  return (
    <Flex flexDirection="column">
      <FormControl>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <Center>
          <Heading as="h2" py="10px">
            Habits List
          </Heading>
        </Center>
        <HStack p="20px" justify="center" align="center" spacing="20px">
          <VStack width="90%" align="flex-start">
            <Text fontSize="2xl" as="u">
              Name
            </Text>
            <Input
              type="text"
              placeholder="e.g. Read"
              size="md"
              value={name}
              //width="50%"
              onChange={e => setName(e.target.value)}
            />
          </VStack>

          <VStack width="30%" align="flex-start">
            <Text fontSize="2xl" as="u">
              Value
            </Text>
            <NumberInput onChange={value => setValue(value)}>
              <NumberInputField placeholder="10" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>

          <VStack width="90%" align="flex-start">
            <Text fontSize="2xl" as="u">
              Unit
            </Text>
            <Input
              type="text"
              placeholder="e.g. minutes"
              size="md"
              //width="50%"
              value={unit}
              onChange={e => setUnit(e.target.value)}
            />
          </VStack>

          <VStack>
            <Text visibility="hidden">DummyText</Text>
            <Button type="submit" colorScheme="twitter" onClick={handleSubmit}>
              {isEditing ? 'Edit' : 'Submit'}
            </Button>
          </VStack>
        </HStack>
      </FormControl>
      {list.length > 0 && (
        <Flex direction="column" justify="space-between" px="15px">
          <List
            items={list}
            removeItemModal={removeItemModal}
            editItem={editItem}
          />
        </Flex>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Remove Habit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to remove this habit from your list?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={removeItem}
              //onClick={() => dispatch(removeHabit({ removeID: removeID }))}
            >
              Yes
            </Button>
            <Button variant="ghost" onClick={onClose}>
              No, Keep Habit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Habits;
