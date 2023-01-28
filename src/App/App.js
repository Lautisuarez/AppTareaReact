import './App.css';
import { TareaProvider } from '../TareaContext/TareaContext';
// UI
import AppUI from '../AppUI';

/* const defaultTareas = [
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar morron", completed: true },
  { text: "Agregar cebolla y morron en la olla", completed: false }
] */

function App() {
  return (
    <TareaProvider>
      <AppUI/>
    </TareaProvider>
  );
}

export default App;
