import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {

  const color = score > 80 ? 'green' : score > 60 ? 'yellow' : ''

  return (
    <Badge colorScheme={color} fontSize='14px' padding={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore