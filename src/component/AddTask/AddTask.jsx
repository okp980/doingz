import React, { useContext, useState } from 'react'
import { AddTaskContext } from '../../context/AddTaskContext/AddTaskContext'
import { TaskContext } from '../../context/taskContext'
import { ThemeContext } from '../../context/themeContext'
import uuid from "react-uuid";

const AddTask = () => {
    const { dispatch } = useContext(TaskContext)
    const { dispatch: dispactcher } = useContext(AddTaskContext)
    const [task, setTask] = useState({ title: '', description: '' })
    const { isLightTheme } = useContext(ThemeContext);
    const ButtonTheme = isLightTheme ? "button" : ["button", "dark"].join(" ");

    const handleTitlechange = (e) => {
        setTask({ ...task, title: e.target.value })
    }
    const handleDescriptionchange = (e) => {
        setTask({ ...task, description: e.target.value })
    }
    const handleSumit = e => {
        let newStorageData = [];

        e.preventDefault();
        if (task.title && task.description) {
            dispatch({
                type: 'ADD_TODO',
                task: {
                    title: task.title,
                    description: task.description,

                }
            })
            const storageJson = localStorage.getItem('dis_task')
            if (storageJson) {
                const storageData = JSON.parse(storageJson)
                newStorageData = [...storageData]
                newStorageData.push({
                    title: task.title,
                    description: task.description,
                    id: uuid()
                })

            } else {
                newStorageData.push({
                    title: task.title,
                    description: task.description,
                    id: uuid()
                })
            }
            localStorage.setItem('dis_task', JSON.stringify(newStorageData))

            setTask({ title: '', description: '' })
            dispactcher({ type: 'CLOSE_TASK' })
        }
    }
    return (
        <>
            <form className='form'>
                <div className="field">
                    <label htmlFor="title">title</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Enter Title'
                        maxLength='15'
                        value={task.title}
                        onChange={handleTitlechange} />
                </div>
                <div className="field">
                    <label htmlFor="description">description</label>
                    <textarea placeholder='Enter info' value={task.description}
                        onChange={handleDescriptionchange} maxLength='36' ></textarea>
                </div>
                <button className={ButtonTheme} type='submit' onClick={handleSumit}>submit</button>
            </form>
        </>
    )
}

export default AddTask
