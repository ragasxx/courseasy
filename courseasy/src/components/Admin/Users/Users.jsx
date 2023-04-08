import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Sidebar from '../Sidebar';
const Users = () => {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box></Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;
