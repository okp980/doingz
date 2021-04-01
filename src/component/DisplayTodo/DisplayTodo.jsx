import React, { useContext } from 'react'
import { AddTaskContext } from '../../context/AddTaskContext/AddTaskContext'
import { TaskContext } from '../../context/taskContext'
import Task from './Task/Task'
import Modal from '../../UI/modal/Modal'
import AddTask from '../AddTask/AddTask'
import { ThemeContext } from '../../context/themeContext'

const DisplayTodo = () => {
    const {tasks} = useContext(TaskContext)
    const {show, dispatch}= useContext(AddTaskContext)
    const { isLightTheme } = useContext(ThemeContext);
	const theme = isLightTheme
		? "all-task"
		: ["all-task", "dark"].join(" ");
    const ButtonTheme = isLightTheme
		? "button"
		: ["button", "dark"].join(" ");

        const InfoTheme = isLightTheme
		? "info"
		: ["info", "dark"].join(" ");

    
const ItemTheme = isLightTheme
		? "item"
		: ["item", "dark"].join(" ");

    return (
        <div className={theme}>
            <ul className={ItemTheme}>
                    {tasks.length? (
                        tasks.map((task, index) => <Task taskItem={task} key={index}/>)) : (
                        <li className={InfoTheme}>
                            You don't have any set-tasks currently, kindly click on the <span className='uppercase'>add task</span> button to add a task
                            </li>)}
            </ul>
            <button className={ButtonTheme} onClick={()=>dispatch({type:'ADD_TASK'})}> add task</button>
            {show && 
            (<Modal>
			    <AddTask />
			</Modal>)}
        </div>
    )
}

export default DisplayTodo
