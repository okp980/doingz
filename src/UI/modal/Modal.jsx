import React, { useContext } from 'react'
import { AddTaskContext } from '../../context/AddTaskContext/AddTaskContext'


const Modal = ({children}) => {
    const {dispatch} = useContext(AddTaskContext)
    return (
        <>
            <div className="backdrop"  onClick={()=>dispatch({type:'CLOSE_TASK'})}></div>
            <div className="modal">
                {children}
            </div>
        </>
    )
}

export default Modal
