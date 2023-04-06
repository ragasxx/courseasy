import React from 'react';
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import introVideo from '../../assets/videos/intro.mp4';
import { useState } from 'react';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'sasasa',
      title: 'sample',
      description: 'falana',
      video: {
        url: 'sasasasasa',
      },
    },
    {
      _id: 'sasasa',
      title: 'sample',
      description: 'falana',
      video: {
        url: 'sasasasasa',
      },
    },
    {
      _id: 'sasasa',
      title: 'sample',
      description: 'falana',
      video: {
        url: 'sasasasasa',
      },
    },
    {
      _id: 'sasasa',
      title: 'sample',
      description: 'ahahahijsi',
      video: {
        url: 'sasasasasa',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
