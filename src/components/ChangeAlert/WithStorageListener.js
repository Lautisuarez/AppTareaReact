import { useEffect, useState } from "react"

function WithStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = useState(false);

        useEffect(() => {
            const onChangeStorage = (e) => {
                if(e.key === "TAREAS_V1"){
                    setStorageChange(true);
                }
            }
            window.addEventListener('storage', onChangeStorage);

            return () => {
                window.removeEventListener('storage', onChangeStorage)
            }
        }, [])

        const toggleShow = () => {
            setStorageChange(false);
            props.sincronize();
        }
        
        return (
            <WrappedComponent 
                show={storageChange} 
                toggleShow={toggleShow}
            />
        )
    }
}

export default WithStorageListener