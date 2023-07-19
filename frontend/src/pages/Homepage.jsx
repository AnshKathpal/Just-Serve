
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Box, SimpleGrid } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Box border="1px solid red" height="80vh" width= "100%" >

      {/* Image */}


      </Box>
      <Box border={'1px solid black'} height={'60vh'} width={'100%'} >
       <SimpleGrid columns={{sm:1,md:2,lg:3}} gap={10}>
        <Box bg={'black'}  h={'100px'}>1</Box>
        <Box bg={'black'} h={'100px'}>2</Box>
        <Box bg={'black'} h={'100px'}>3</Box>
       </SimpleGrid>
      </Box >
      
      <Footer/>
    </div>
  )
}

export default Homepage
