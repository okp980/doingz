import React, {createContext, useReducer} from 'react'
import { addTaskReducer } from '../../reducer/addTaskReducer';

export const AddTaskContext = createContext()

const AddTaskContextProvider = ({children}) => {
    const [show, dispatch] = useReducer(addTaskReducer ,false);

 
    return (
        <AddTaskContext.Provider value={{show, dispatch}}>
            {children}
        </AddTaskContext.Provider>
    )
}

export default AddTaskContextProvider
