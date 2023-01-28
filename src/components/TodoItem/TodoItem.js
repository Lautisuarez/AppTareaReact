function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={(completed) ? "completed" : undefined}>
        { (!completed) ? 
          <span className="material-symbols-rounded btn-check" onClick={onComplete}>radio_button_unchecked</span> : 
          <span className="material-symbols-rounded btn-checked" onClick={onComplete}>task_alt</span>
        }
        <p>{text}</p>
        <div>
          <span className="material-symbols-rounded btn-delete" onClick={onDelete}>delete</span>
        </div>
    </li>
  )
}

export default TodoItem