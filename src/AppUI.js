import { TareaContext } from './TareaContext/TareaContext';
import { useContext } from 'react';
import Modal from './Modal/Modal';
// Components
import TodoCounter from './components/TodoCounter/TodoCounter';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoItem/TodoItem';
import TodoForm from './components/TodoForm/TodoForm';
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton';

function AppUI() {
  const {error, loading, filterTareas, completeTareas, deleteTareas, openModal, setOpenModal} = useContext(TareaContext);

  return (
    <div className='box'>
      <h1>Lista de tareas</h1>
      <TodoCounter />
      <TodoSearch />
      {(filterTareas.length > 0) && 
        <TodoList>
          {filterTareas.map(tarea => (
            <TodoItem 
              text={tarea.text} 
              key={tarea.text} 
              completed={tarea.completed}
              onComplete={() => completeTareas(tarea.text)}
              onDelete={() => deleteTareas(tarea.text)}
            />
          ))}
        </TodoList>
      }

      {error && <p className='error-text'>Oops! Ocurrió un error...</p>}
      {(!loading && !filterTareas.length) && 
        <div className='msg-text'>
          <span className="material-symbols-outlined ">
            pending_actions
          </span>
          <p>Oh, parece que no tienes ninguna tarea pendiente...</p>
          <p>Usa el botón <span>+</span> para agregar</p>
        </div>
      }
      {loading && <span className="loader"></span>}

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </div>
  )
}

export default AppUI