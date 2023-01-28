function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={(completed) ? "completed" : undefined}>
        { (!completed) ? 
          <span className="material-symbols-rounded btn-check" onClick={onComplete}>radio_button_unchecked</span> : 
          <span className="material-symbols-rounded btn-checked" onClick={onComplete}>task_alt</span>
        }
        <p>{text}</p>
        <span className="material-symbols-rounded btn-delete" onClick={onDelete}>delete</span>
    </li>
  )
}

export default TodoItem