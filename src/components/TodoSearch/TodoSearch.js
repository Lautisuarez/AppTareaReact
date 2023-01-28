import { useContext } from "react";
import { TareaContext } from "../../TareaContext/TareaContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TareaContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <input 
      placeholder='Buscar tarea...'
      onChange={onSearchValueChange}
      value={searchValue} 
    />
  )
}

export default TodoSearch