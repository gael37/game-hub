import React from 'react'
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import allGamesImage from '../assets/all-video-games.webp'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../store'

const GenreList = () => {

  const { data, isLoading, error } = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const searchText = useGameQueryStore(s => s.gameQuery.searchText)

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        <HStack gap={0}>
          <Image boxSize='32px' borderRadius={8} objectFit='cover' src={allGamesImage} />
          <Button
            onClick={() => {
              setSelectedGenreId(null)
              setSearchText(null)
            }
            }
            fontWeight='normal'
            fontSize='lg'
            variant='link'>All</Button>
        </HStack>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => setSelectedGenreId(genre.id)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List >
    </>
  )
}

export default GenreList