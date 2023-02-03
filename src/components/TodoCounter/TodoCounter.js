function TodoCounter({ totalTareas, completedTareas }) {
  return (
    <p className="counter">Has completado {completedTareas} de {totalTareas} tareas</p>
  )
}

export default TodoCounter