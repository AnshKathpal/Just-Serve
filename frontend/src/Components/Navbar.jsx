
// import React from "react";
// import {
//   ChakraProvider,
//   Box,
//   Flex,
//   Spacer,
//   IconButton,
//   useColorMode,
//   HStack,
//   Center,
//   Divider,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuDivider,
//   MenuItem,
// } from "@chakra-ui/react";
// import { SunIcon, MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import { HiOutlineGlobeAlt } from "react-icons/hi";

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Box p={4} bg="white.800" color="black" borderBottom={'1px solid gray'}>
//       <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
//         <HStack
//           spacing={{ base: "0px", md: "24px" }}
//           align={{ base: "center", md: "initial" }}
//         >
//           <Box>Logo</Box>
//           <HStack spacing="2px">
//             <Box w={{ base: "70px", md: "auto" }} h="10" bg="white.400" border={"1px solid red"}>
//               Jobs
//             </Box>
//             <Box w={{ base: "170px", md: "auto" }} h="10" bg="white.400" border={"1px solid red"}>
//               Internships
//             </Box>
//             <Box w={{ base: "180px", md: "auto" }} h="10" bg="white.400" border={"1px solid red"}>
//               Volunteer Opportunities
//             </Box>
//             <Box w={{ base: "180px", md: "auto" }} h="10" bg="white.400" border={"1px solid red"}>
//               Organizations
//             </Box>
//           </HStack>
//         </HStack>

//         <Spacer />

//         <Flex
//           direction={{ base: "column", md: "row" }}
//           align={{ base: "center", md: "initial" }}
//         >
//           <Box w={{ base: "100%", md: "500px" }} h="10">
//             <Flex>
//              <HStack spacing='24px'>
//               <Box w={{ base: "100%", md: "180px" }} h="10">
//                 login
//               </Box>
              
//               <Center height='50px'>
//   <Divider orientation='vertical' />
// </Center>
              
//               <Box w={{ base: "100%", md: "10px"  }} h={"10"}  >
                
//                 <Menu isLazy>
//                   <MenuButton>n menu</MenuButton>
//                   <MenuList>
                    
//                     <MenuItem>New Window</MenuItem>
//                     <MenuItem>Open Closed Tab</MenuItem>
//                   </MenuList>
//                 </Menu>
//               </Box>
//              <Center height='50px'>
//   <Divider orientation='vertical' />
// </Center>
//               <Box w={{ base: "100%", md: "180px" }} h="10">
//                 <Menu>
//                   <MenuButton
//                     px={4}
//                     py={2}
//                     transition='all 0.2s'
//                     borderRadius='md'
//                     borderWidth='1px'
//                     _hover={{ bg: 'gray.400' }}
//                     _expanded={{ bg: 'blue.400' }}
//                     _focus={{ boxShadow: 'outline' }}
//                   >
//                     For Organizations <ChevronDownIcon />
//                   </MenuButton>
//                   <MenuList>
//                     <MenuItem>Post a Listing</MenuItem>
//                     <MenuDivider />
//                     <MenuItem>Add Your Organization</MenuItem>
//                   </MenuList>
//                 </Menu>
//               </Box>
//               </HStack>
//             </Flex>
//           </Box>
         
//         </Flex>
//       </Flex>
//     </Box>
//   );
// }

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../Images/JustServe.png'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }}  justify={{ base: 'center', md: 'start' }} border={'1px solid red'} alignItems={'center'} >
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <img src={logo} alt="" style={{width:"40%",}} />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={-20} border={'1px solid blue'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Jobs',
    children: [
      // {
      //   label: 'Explore Design Work',
      //   subLabel: 'Trending Design to inspire you',
      //   href: '#',
      // },
      // {
      //   label: 'New & Noteworthy',
      //   subLabel: 'Up-and-coming Designers',
      //   href: '#',
      // },
    ],
  },
  {
    label: 'Internships',
    children: [
      // {
      //   label: 'Job Board',
      //   subLabel: 'Find your dream design job',
      //   href: '#',
      // },
      // {
      //   label: 'Freelance Projects',
      //   subLabel: 'An exclusive list for contract work',
      //   href: '#',
      // },
    ],
  },
  {
    label: 'Volunteer Opportunities',
    href: '#',
  },
  {
    label: 'Organizations',
    href: '#',
  },
];
