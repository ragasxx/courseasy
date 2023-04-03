import {
  Avatar,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding="8">
    <VStack>
      <Avatar
        src="https://wallpaperaccess.com/full/551959.jpg"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Kaito" size={['md', 'xl']} />
      <Text
        children={`Hi, I am a full-stack developer and a teacher.Our mission is to 
    quality content at reasonable price.`}
        textAlign={['center', 'left']}
      />
    </VStack>
  </Stack>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']}></Heading>
      <Founder />
      <Stack m='8' direction={['column','row']} alignItems='center'></Stack>
    </Container>
  );
};

export default About;
