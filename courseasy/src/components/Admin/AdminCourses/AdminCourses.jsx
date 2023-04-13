import React from 'react';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
const AdminCourses = () => {
  const courses = [
    {
      _id: '1',
      poster: {
        url: 'https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg',
      },
      title: 'redux',
      category: 'web development',
      createdBy: 'sagar',
      views: 12,
      numOfVideos: 12,
    },
    {
      _id: '2',
      poster: {
        url: 'https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg',
      },
      title: 'react',
      category: 'web development',
      createdBy: 'sagar12',
      views: '6',
      numOfVideos: '9',
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userId => {
    console.log(userId);
    onOpen();
  };

  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId, lectureId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          children="All Courses"
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
                <Th>poster</Th>
                <Th>title</Th>
                <Th>category</Th>
                <Th>creator</Th>
                <Th isNumeric>views</Th>
                <Th isNumeric>lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses &&
                courses.map(item => (
                  <Row
                    key={item._id}
                    item={item}
                    courseDetailsHandler={courseDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'hjhjhjhjhjhj'}
          courseTitle="React Course"
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            children="View Lectures"
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

export default AdminCourses;
