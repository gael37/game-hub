import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-neon-nobg.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px' w="full">
      <Link to='/'>
        <Image src={logo} width='70px' height='60px' objectFit='cover' borderRadius={50} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar