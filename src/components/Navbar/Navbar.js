import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { useHistory } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from "../Logo.png"

const NavLink = ({ children, dest }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={dest}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  return (
    <>
      <Box bg="none" px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon /> }
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
            <Box><img src={Logo} alt="logo" /></Box>
          <Flex alignItems={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>

            <NavLink dest="/">HOME</NavLink>
            <NavLink dest="/menu">MENU</NavLink>
            <NavLink dest="/">OFFERS</NavLink>
            <NavLink dest="/about">ABOUT</NavLink>
              
            </HStack>
          <Button
              variant={'solid'}
              bg="brand.300"
              color="white"
              size={'sm'}
              mr={4}
              onClick={() => history.push(`/signup`)}
              >
              Sign Up
            </Button>
          </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
            <NavLink dest="/">HOME</NavLink>
            <NavLink dest="/menu">MENU</NavLink>
            <NavLink dest="##">OFFERS</NavLink>
            <NavLink dest="/about">ABOUT</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}
