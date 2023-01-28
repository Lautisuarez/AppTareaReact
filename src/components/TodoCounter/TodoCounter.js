import { useContext } from "react"
import { TareaContext } from "../../TareaContext/TareaContext"

function TodoCounter() {
  const { totalTareas, completedTareas } = useContext(TareaContext);

  return (
    <p className="counter">Has completado {completedTareas} de {totalTareas} tareas</p>
  )
}

export default TodoCounter