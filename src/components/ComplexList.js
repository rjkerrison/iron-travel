import { useState } from 'react'
import CountryCard from './CountryCard'

const ComplexList = () => {
  const [listItems, setListItems] = useState([
    {
      name: 'Argentina',
      continent: 'South America',
      population: 90000000,
    },
    { name: 'Bulgaria', continent: 'Europe', population: 42000000 },
    { name: 'China', continent: 'Asia', population: 1600000000 },
  ])

  const removeItem = (item) => {
    // IMMUTABILITY
    // we never change listItems (any state variables) directly
    const newList = [...listItems]
    // remove item from the list
    const index = newList.indexOf(item)
    newList.splice(index, 1)

    console.log('Calling setListItems with', newList)
    setListItems(newList)
  }

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.name} onClick={() => removeItem(item)}>
          <CountryCard {...item} />
        </li>
      ))}
    </ul>
  )
}

export default ComplexList
