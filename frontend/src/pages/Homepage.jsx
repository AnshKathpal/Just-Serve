
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Box, Button, Center, Circle, Divider, Heading, Image, SimpleGrid, Spacer } from '@chakra-ui/react'
import ImageSlider from '../Components/ImageSlider'


const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Box border="1px solid red" height="80vh" width= "100%" >

      {/* Image */}


      </Box>
      <Box border={'1px solid black'} height={'60vh'} width={'100%'} >
       <SimpleGrid columns={{sm:1,md:2,lg:3}} gap={10}>
        <Box border={"1px solid blue"}  h={'100px'}>
          <img src="" alt="" />
          <p></p>
        </Box>
        <Box border={"1px solid blue"} h={'100px'}>2</Box>
        <Box border={"1px solid blue"} h={'100px'}>3</Box>
       </SimpleGrid>
      </Box >
      <SimpleGrid columns={{sm:1,lg:2}} marginTop={"50px"}>
        <Box border={'1px solid red'} marginTop={'20px'} h={'600px'}>1</Box>
        <Box border={'1px solid red'} marginTop={'20px'} h={'600px'}>1</Box>
      </SimpleGrid>
       <Divider marginTop={'10px'} />
       <Spacer />
       <Box fontSize={"4xl"} fontWeight={'bold'} marginTop={20}><Center ><h1  >The latest from our career experts</h1></Center></Box>
       <SimpleGrid columns={{lg:4,sm:1}} gap={10} h={"30vh"}>
       <Box>
        
        
        <Image margin={'auto'}
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/><Heading size='lg' fontSize='20px'>
Who's Hiring? 10 Organizations Hiring for Director-Level Roles
</Heading>
        </Box>
       
        <Box>
        
        
        <Image margin={'auto'}
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/><Heading size='lg' fontSize='20px'>
Who's Hiring? 10 Organizations Hiring for Director-Level Roles
</Heading>
        </Box>
        <Box>
        
       
        <Image margin={'auto'}
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/><Heading size='lg' fontSize='20px'>
Who's Hiring? 10 Organizations Hiring for Director-Level Roles
</Heading>
        </Box>
        <Box>
        
        <Image margin={'auto'}
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/><Heading size='lg' fontSize='20px'>
Who's Hiring? 10 Organizations Hiring for Director-Level Roles
</Heading>
        </Box>
       </SimpleGrid>
       <Center> <Button>Read More</Button></Center>
       
       <Box margin={'auto'} marginTop={'100px'} marginBottom={'100px'}> <Center> <Heading>Recent Jobs</Heading></Center></Box>
       <ImageSlider/>
       <Box border={'1px solid red'} h={'80vh'}>
       
       </Box>
       <ImageSlider/>
        <Box border={'1px solid red'} h={'80vh'}></Box>
        <Box border="1px solid red" height="80vh" width= "100%" >

      {/* Image */}


      </Box>
      <Footer/>
    </div>
  )
}

export default Homepage
