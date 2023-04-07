import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  return (
    <Container py={"16"} minH="90vh">
      <form>
        <Heading
          textTransform={'uppercase'}
          children="Update Profile"
          my={"16"}
          textAlign={['center', 'left']}
        />
        <VStack spacing={"8"}>
        <Input
          required
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          focusBorderColor="yellow.500"
        />
        <Input
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          focusBorderColor="yellow.500"
        />
        <Button w={"full"} colorScheme={"yellow"} type="submit">
           Update
        </Button>
        </VStack>
      </form>
      
       
    </Container>
  )
}

export default UpdateProfile