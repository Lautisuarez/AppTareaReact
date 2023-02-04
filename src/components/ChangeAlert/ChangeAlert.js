import React from 'react'
import WithStorageListener from './WithStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
    if(show){
        return (
            <div className='bg-notification'>
                <div className='bg-modal-notification'>
                    <p><span>Oops!</span> Parece que hubo un cambio en otra pestaña o ventana de tu navegador. Por favor sincroniza las tareas.</p>
                    <button
                        onClick={() => toggleShow(false)}
                    >Sincronizar</button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export default ChangeAlertWithStorageListener