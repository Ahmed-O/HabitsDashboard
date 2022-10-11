import React, { useEffect } from 'react';
import { Text } from '@chakra-ui/react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [list]);

  let textColor = '';
  let bgColor = '';
  if (type === 'remove') {
    textColor = 'red.900';
    bgColor = 'red.100';
  } else {
    textColor = 'green.900';
    bgColor = 'green.100';
  }
  return (
    <Text color={textColor} backgroundColor={bgColor} textAlign="center">
      {msg}
    </Text>
  );
};

export default Alert;
