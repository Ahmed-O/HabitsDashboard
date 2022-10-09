import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const List = ({ items, removeItem, editItem }) => {
  return (
    <Flex justify="space-between" direction="column" className="grocery-list">
      {items.map(item => {
        const { id, title } = item;
        return (
          <Flex justify="space-between" className="grocery-item" key={id}>
            <Text fontSize="2xl" className="title">
              {title}
            </Text>
            <Flex className="btn-container">
              <Button
                type="button"
                color="green"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </Button>
              <Button
                type="button"
                color="red"
                className="delete-btn"
                onClick={() => removeItem(id)}
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
