import React from 'react'

function CreateTodoButton({setOpenModal, openModal}) {
  const addTask = (e) => {
    setOpenModal(!openModal);
    if(!openModal){
      e.target.style.transform = "rotate(45deg)";
      e.target.style.transition = "all .3s";
    } else {
      e.target.style.transform = "";
    }
  }
  return (
    <button 
      className='btn-more'
      onClick={addTask}
    >
      <span className="material-symbols-rounded">add</span>
    </button>
  )
}

export default CreateTodoButton