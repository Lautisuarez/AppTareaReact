import { useState } from "react";
// Custom Hook
import useLocalStorage from "./UseLocalStorage";

function useTodos(){
    const {item: tareas, saveItem: saveTareas, loading, error} = useLocalStorage("TAREAS_V1", []);
    const [searchValue, setSearchValue] = useState(""); 
    const [openModal, setOpenModal] = useState(false);

    const completedTareas = tareas.filter(tarea => tarea.completed).length;
    const totalTareas = tareas.length;

    let filterTareas = [];
    if(!searchValue.length >= 1){
        filterTareas = tareas
    } else {
        filterTareas = tareas.filter(tarea => (
        tarea.text.toLowerCase().includes(searchValue.toLowerCase())
        ))
    }
    
    const addTarea = (text) => {
        const newTareas = [...tareas];
        newTareas.push({
            completed: false,
            text: text
        });
        saveTareas(newTareas);
    }

    const completeTareas = (text) => {
        const index = tareas.findIndex(tarea => tarea.text === text);
        const newTareas = [...tareas];
        newTareas[index].completed = !newTareas[index].completed;
        saveTareas(newTareas);
    }

    const deleteTareas = (text) => {
        const newTareas = tareas.filter(tarea => tarea.text !== text)
        saveTareas(newTareas)
    }
    return {
        loading,
        error,
        totalTareas,
        completedTareas,
        searchValue,
        setSearchValue,
        filterTareas,
        addTarea,
        completeTareas,
        deleteTareas,
        openModal,
        setOpenModal
    }
}

export { useTodos };