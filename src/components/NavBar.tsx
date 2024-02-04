import { Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
// import videoGameLogo from '../assets/video-games-image.jpeg'
import logoGreen from '../assets/logo-green.png'
import controllerNeon from '../assets/controller-neon.png'
// import videoGameLogo from '../assets/video-games-image.jpeg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px' w="full">
      <Link to='/'>
        <Image src={controllerNeon} width='60px' objectFit='cover' borderRadius={100} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar