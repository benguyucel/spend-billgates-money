import { Box, Flex, Image, Spacer, Button, Input } from '@chakra-ui/react'
import styled from './index.module.css'
import { formatMoney } from '../../utils/moneyFormat'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/slice/cartSlice'
const Product = ({ item }) => {
  const [count, setCount] = useState(0)
  const [pageLoaded, setPageLoaded] = useState(false)
  const { leftMoney } = useSelector(state => state.money)

  const dispatch = useDispatch()
  const handleChange = async (e) => {
    setPageLoaded(true)
    let counter = await Number(e.target.value)
    if (counter * item.productPrice > leftMoney) {
      counter = await Math.floor((leftMoney / item.productPrice) + (count))
    }
    setCount(counter)
  }

  useEffect(() => {
    if (pageLoaded !== false) dispatch(addToCart({ item, count }))
  }, [count, pageLoaded, dispatch, item])
  return (
    <Box maxW='sm' borderWidth='1px'
      borderRadius='lg'
      display={"flex"}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={"center"}
    >
      <Image className={styled.productImg} src={item.image} alt={item.productName} />
      <Box p='6' width={"100%"} display={'flex'} flexDirection={'column'} justifyContent={'flex-end'}>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {item.productName}
        </Box>
        <Box width={'100%'}>
          {formatMoney(Number(item.productPrice))}
        </Box>
        <Flex width={'100%'} paddingTop={5}>
          <Button disabled={count <= 0} onClick={() => { setPageLoaded(true); setCount(count - 1); }} colorScheme='gray'>Shell</Button>
          <Spacer />
          <Input value={count} onChange={handleChange} type={'number'} size='md' width={'40%'} textAlign={'center'} />
          <Spacer />
          <Button disabled={leftMoney < item.productPrice} onClick={() => { setPageLoaded(true); setCount(count + 1); }} colorScheme='red'>Buy</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default React.memo(Product)