import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import allGamesImage from '../assets/all-video-games.webp'


interface Props {
  onSelectGenre: (genre: Genre | null) => void,
  selectedGenreId?: number
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {

  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        <HStack gap={0}>
          <Image boxSize='32px' borderRadius={8} objectFit='cover' src={allGamesImage} />
          <Button onClick={() => onSelectGenre(null)} fontWeight='normal' fontSize='lg' variant='link'>All</Button>
        </HStack>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List >
    </>
  )
}

export default GenreList