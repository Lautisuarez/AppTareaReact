function TodoSearch({ searchValue, setSearchValue, totalTareas }) {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <input 
      className="search"
      placeholder='Buscar tarea...'
      onChange={onSearchValueChange}
      value={searchValue} 
      disabled={(totalTareas === 0)}
    />
  )
}

export default TodoSearch