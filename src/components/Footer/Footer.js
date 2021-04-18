import {
    Box,
    Container,
    Stack,
    Link,
    Text,
  } from '@chakra-ui/react';
  import { FaInstagram, FaFacebook } from 'react-icons/fa';
  import { MdRestaurant } from 'react-icons/md';
  
 const Footer = () => {
    return (
      <Box
        bg="brand.900"
        color="white"
        py={6}
        mt="5"
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'/about'}>About</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
          <Text>All rights reserved © 2021</Text>
          <Stack direction={'row'} spacing={6}>
              <Link href="https://www.zomato.com/beirut/edenberg-ehden-zgharta/menu"><MdRestaurant /></Link>
              <Link href="https://www.facebook.com/pages/category/Restaurant/Edenberg-609394652562256/"><FaFacebook /></Link>
              <Link href="https://www.instagram.com/edenberg.eat/?hl=en"><FaInstagram /></Link>
          </Stack>
        </Container>
      </Box>
    );
  }
  export default Footer;