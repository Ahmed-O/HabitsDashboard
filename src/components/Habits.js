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
} from '@chakra-ui/react';
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function Habits() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = e => {
    console.log('In the handle submit');
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        list.map(item => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  // const clearList = () => {
  //   showAlert(true, 'danger', 'empty list');
  //   setList([]);
  // };
  const removeItem = id => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter(item => item.id !== id));
  };
  const editItem = id => {
    const specificItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <Flex flexDirection="column" className="section-center">
      <FormControl className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <Center>
          <Heading as="h2" py="10px">
            Habits List
          </Heading>
        </Center>
        <HStack
          p="20px"
          justify="center"
          align="center"
          spacing="20px"
          className="form-control"
        >
          <VStack width="90%" align="flex-start">
            <Text fontSize="lg" as="u">
              Name
            </Text>
            <Input
              type="text"
              className="grocery"
              placeholder="e.g. Read"
              size="md"
              value={name}
              //width="50%"
              onChange={e => setName(e.target.value)}
            />
          </VStack>

          <VStack width="30%" align="flex-start">
            <Text fontSize="lg" as="u">
              Value
            </Text>
            <NumberInput>
              <NumberInputField placeholder="10" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>

          <VStack width="90%" align="flex-start">
            <Text fontSize="lg" as="u">
              Unit
            </Text>
            <Input
              type="text"
              className="grocery"
              placeholder="e.g. minutes"
              size="md"
              //width="50%"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </VStack>

          <VStack>
            <Text visibility="hidden">DummyText</Text>
            <Button
              type="submit"
              className="submit-btn"
              colorScheme="twitter"
              onClick={handleSubmit}
            >
              {isEditing ? 'Edit' : 'Submit'}
            </Button>
          </VStack>
        </HStack>
      </FormControl>
      {list.length > 0 && (
        <Flex
          direction="column"
          justify="space-between"
          px="15px"
          className="grocery-container"
        >
          <List items={list} removeItem={removeItem} editItem={editItem} />
          {/* <Button className="clear-btn" onClick={clearList}>
            clear items
          </Button> */}
        </Flex>
      )}
    </Flex>
  );
}

export default Habits;
