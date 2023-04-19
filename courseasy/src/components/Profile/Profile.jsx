import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useState } from 'react';

const Profile = () => {
  const user = {
    name: 'sagar',
    email: 'sagar@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'sasasa',
        poster:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAtBz4xm9-8WYyteqc9gyzxgQEHRkQgxvdQ&usqp=CAU',
      },
      {
        course: 'sasasa',
        poster:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAtBz4xm9-8WYyteqc9gyzxgQEHRkQgxvdQ&usqp=CAU',
      },
      {
        course: 'sasasa',
        poster:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAtBz4xm9-8WYyteqc9gyzxgQEHRkQgxvdQ&usqp=CAU',
      },
      {
        course: 'sasasa',
        poster:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAtBz4xm9-8WYyteqc9gyzxgQEHRkQgxvdQ&usqp=CAU',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={'95vh'} maxW="container.lg" py={'8'}>
      <Heading children="Profile" m={'8'} textTransform="uppercase" />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems="center"
        spacing={['8', '16']}
        p="8"
      >
        <VStack>
          <Avatar boxSize={'40'} />
          <Button colorScheme={'yellow'} variant="ghost" onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created At" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'}></Text>
              {user.subscription.status === 'active' ? (
                <Button color={'yellow.500'}>Cancel Subscription</Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}> Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems="center">
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children={'Playlist'} size="md" my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems="center"
          flexWrap={'wrap'}
          p="4"
        >
          {user.playlist.map(element => (
            <VStack w={'48'} m="2" key={element.course}>
              <Image
                boxSize={'full'}
                objectFit="contain"
                src={element.poster}
              ></Image>
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
  };

  const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
  };

  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'40'} />}
                <Input
                  type="file"
                  css={fileUploadStyle}
                  onChange={changeImageHandler}
                />
                <Button w={'full'} colorScheme={'yellow'} type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}