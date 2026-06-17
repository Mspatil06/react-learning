import React from 'react'
const SearchBox = React.memo(({ search, setSearch }) => {
 console.log('SearchBox Rendered')
 return (
<input
     type="text"
     placeholder="Search Product"
     value={search}
     onChange={e => setSearch(e.target.value)}
   />
 )
})
export default SearchBox