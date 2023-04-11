import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';

const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',

  backgroundColor: '#D6BCFA',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structures and Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'}>
        <form>
          <Heading
            children="Create Course"
            textAlign={['center', 'left']}
            my={'16'}
          />

          <VStack spacing={'8'} m={'auto'}>
            <Input
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              placeholder="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              placeholder="Creator name"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              type="text"
              focusBorderColor="purple.300"
            />

            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="Select Category"
            >
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type={'file'}
              focusBorderColor="purple.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} objectFit="contain" boxSize={'60'} />
            )}

            <Button w={'full'} colorScheme="purple" type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>

      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
