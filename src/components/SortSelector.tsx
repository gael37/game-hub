import { Menu, MenuButton, Button, MenuList, MenuItem, useMediaQuery, Box } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'

const SortSelector = () => {

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' }
  ]

  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const setSortOrder = useGameQueryStore(s => s.setSortOrder)

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => <MenuItem
          onClick={() => setSortOrder(order.value)}
          key={order.value}
          value={order.value}
        >
          {order.label}
        </MenuItem>)}
      </MenuList>
    </Menu >
  )
}

export default SortSelector

