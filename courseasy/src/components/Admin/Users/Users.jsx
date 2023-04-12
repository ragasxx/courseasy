import React from 'react';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiDeleteBin3Fill, RiDeleteBin7Fill } from 'react-icons/ri';
const Users = () => {
  const users = [
    {
      _id: '1122323223',
      name: 'sagar',
      email: 'sagar@gmail.com',
      role: 'user',
      subscription: {
        status: 'active',
      },
    },
    {
      _id: '112233223',
      name: 'sagar1',
      email: 'sagar@gmail.com',
      role: 'user',
      subscription: {
        status: 'active',
      },
    },
    {
      _id: '112232322',
      name: 'sagar2',
      email: 'sagar@gmail.com',
      role: 'user',
      subscription: {
        status: 'active',
      },
    },
  ];

  const updateHandler = userId => {
    console.log(userId);
  };

  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          children="All users"
          size={'xl'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
          my={'8'}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users && users.map(item => <Row key={item._id} item={item} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} />)}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            children="Change Role"
            variant={'outline'}
            colorScheme="purple.500"
          ></Button>
          <Button onClick={() => deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill color="purple.600" />
          </Button>{' '}
        </HStack>
      </Td>
    </Tr>
  );
}
