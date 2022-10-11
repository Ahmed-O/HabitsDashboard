import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Flex, Text } from '@chakra-ui/react';

const List = ({ items, removeItemModal, editItem }) => {
  return (
    <Flex justify="space-between" direction="column">
      {items.map(item => {
        const { id, title, unit, value } = item;
        return (
          <Flex justify="space-between" key={id}>
            <Text fontSize="2xl">{`${title} - ${value} ${unit}`}</Text>
            <Flex>
              <Button type="button" color="green" onClick={() => editItem(id)}>
                <FaEdit />
              </Button>
              <Button
                type="button"
                color="red"
                onClick={() => removeItemModal(id)}
              >
                <FaTrash />
              </Button>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default List;
