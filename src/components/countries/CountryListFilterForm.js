import React from 'react'

const CountryListFilterForm = ({
  formData,
  handleCheck,
  query,
  updateQuery,
}) => {
  return (
    <form className='CountryListFilters'>
      <div className='filter-group'>
        <input
          type='checkbox'
          name='europe'
          id='europe'
          checked={formData.europe}
          onClick={handleCheck}
        />
        <label htmlFor='europe'>Europe</label>
        <input
          type='checkbox'
          name='northAmerica'
          id='north-america'
          checked={formData.northAmerica}
          onClick={handleCheck}
        />
        <label htmlFor='north-america'>North America</label>
        <input
          type='checkbox'
          name='southAmerica'
          id='south-america'
          checked={formData.southAmerica}
          onClick={handleCheck}
        />
        <label htmlFor='south-america'>South America</label>
        <input
          type='checkbox'
          name='africa'
          id='africa'
          checked={formData.africa}
          onClick={handleCheck}
        />
        <label htmlFor='africa'>Africa</label>
        <input
          type='checkbox'
          name='oceania'
          id='oceania'
          checked={formData.oceania}
          onClick={handleCheck}
        />
        <label htmlFor='oceania'>Oceania</label>
        <input
          type='checkbox'
          name='antarctica'
          id='antarctica'
          checked={formData.antarctica}
          onClick={handleCheck}
        />
        <label htmlFor='antarctica'>Antarctica</label>
      </div>
      <div className='filter-group'>
        <input
          name='query'
          type='search'
          value={query}
          onChange={updateQuery}
          placeholder='Filter by name, e.g. "Can"'
        />
      </div>
    </form>
  )
}

export default CountryListFilterForm
