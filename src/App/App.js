import './App.css';
import Modal from '../Modal/Modal';
// Custom Hooks
import { useTodos } from '../Hooks/useTodos';
// Components
import TodoHeader from '../components/TodoHeader/TodoHeader';
import TodoCounter from '../components/TodoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/TodoList/TodoList';
import TodoItem from '../components/TodoItem/TodoItem';
import TodoForm from '../components/TodoForm/TodoForm';
import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton';

function App() {
  const {
    error, 
    loading, 
    filterTareas, 
    completeTareas, 
    deleteTareas, 
    openModal,
    setOpenModal, 
    totalTareas, 
    completedTareas,
    searchValue, 
    setSearchValue,
    addTarea
  } = useTodos();

  return (
    <div className='box'>
      {/* HEADER */}
      <TodoHeader>
        <h1>Lista de tareas</h1>
        <TodoCounter 
          totalTareas={totalTareas}
          completedTareas={completedTareas}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          totalTareas={totalTareas}
        />
      </TodoHeader>

      {/* LISTA DE TAREAS */}
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

      {/* NOTIFICACIONES */}
      {error && <p className='error-text'>Oops! Ocurrió un error...</p>}
      {(!loading && searchValue.length > 0 && !filterTareas.length) && <p className='error-text'>No se ha encontrado ninguna tarea: <span>{searchValue}</span></p>}
      {(!loading && !totalTareas) && 
        <div className='msg-text'>
          <span className="material-symbols-outlined ">pending_actions</span>
          <p>Oh, parece que no tienes ninguna tarea pendiente...</p>
          <p>Usa el botón <span>+</span> para agregar</p>
        </div>
      }

      {/* LOADER */}
      {loading && <span className="loader"></span>}

      {/* MODAL */}
      {!!openModal && (
        <Modal>
          <TodoForm 
            addTarea={addTarea}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      {/* BOTON PARA CREAR NUEVA TAREA */}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </div>
  )
}

export default App;
