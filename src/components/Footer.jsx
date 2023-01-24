import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Input,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p="16" color={'white'} >
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading size={'md'} textTransform={'uppercase'} text={['center','left']}>
            Subscribe To Get Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'} 
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>Video Hub</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>

        <VStack w={'full'} 
  
        >
          <Heading size={'md'}
          textTransform={'uppercase'}
          >Social Media</Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a href='https://www.linkedin.com/in/nikhilnishad/' target={'blank'}>LinkedIn</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href='https://github.com/Nikhil-Nishad' target={'blank'}>GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
