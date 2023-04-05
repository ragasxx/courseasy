import React, { useState } from 'react';
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        size={'sm'}
        textAlign={['center', 'left']}
        maxWidth="200px"
        fontFamily={'sans-serif'}
        noOfLines="3"
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures- ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views- ${views}`}
        textTransform="uppercase"
      />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler()}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('added to playlist');
  };

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structures and Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY="8">
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => e.target.value}
        placeholder="Search a course..."
        focusBorderColor="yellow.500"
      />
      <HStack display={'flex'} justifyContent="space-evenly" paddingY={'8'}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minWidth={'60'}>
            <Text children={item}></Text>
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample1'}
          description={'sample1'}
          views={23}
          imageSrc={
            'https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg'
          }
          id={'Sample1'}
          creator={'sample2'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
