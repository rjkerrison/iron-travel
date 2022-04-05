import { useState } from 'react'

const BasicList = () => {
  const [listItems, setListItems] = useState(['Argentina', 'Bulgaria', 'China'])

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
        <li key={item} onClick={() => removeItem(item)}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default BasicList
