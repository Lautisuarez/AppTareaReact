import React from 'react'

function TodoList(props) {
  return (
    <section className='tareas'>
        <ul>
            {props.children}
        </ul>
    </section>
  )
}

export default TodoList