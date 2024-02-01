import { HStack, Switch, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { RiMoonClearFill } from "react-icons/ri";

const ColorModeSwitch = () => {

  const { toggleColorMode, colorMode } = useColorMode()

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')


  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      < Text whiteSpace='nowrap'>
        {isLargerThan768 ? 'Dark Mode' : <RiMoonClearFill />}
      </Text>
    </HStack >
  )
}

export default ColorModeSwitch