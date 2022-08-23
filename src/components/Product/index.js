import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import styled from './index.module.css'
function Product({ item }) {

  console.log(item)
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={"center"} width={'100%'}>
      <Image className={styled.productImg} src={item.image} alt={item.productName} />
      <Box p='6'>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {item.productName}
        </Box>

        <Box display={'flex'} justifyContent={'flex-end'} width={'100%'}>
          {item.productPrice} $
        </Box>

      </Box>
    </Box>
  )
}

export default Product