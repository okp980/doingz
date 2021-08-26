import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../context/taskContext'
import { ThemeContext } from '../../context/themeContext'
import TaskFinished from './TaskFinised'


const FinishedTask = (id) => {
    const { tasks } = useContext(TaskContext)
    const [finishedTask, setFinihedTask] = useState([])

    const { isLightTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? "finished" : ["finished", "dark"].join(" ");
    const infoTheme = isLightTheme ? "info" : ["info", "dark"].join(" ");

    useEffect(() => {
        const storedTask = JSON.parse(localStorage.getItem('dis_task'))
        if (storedTask) {
            if (storedTask.length > 0) {
                setFinihedTask(storedTask.filter(task => task.completed === true))
            }
        }
    }, [])

    useEffect(() => {
        setFinihedTask(tasks.filter(task => task.completed === true))
    }, [tasks])

    return (
        <>
            <ul className={theme}>
                {finishedTask.length > 0 ? finishedTask.map((task, index) => <TaskFinished key={index} task={task} />) : (
                    <li className={infoTheme}>no completed task to display</li>
                )}
            </ul>
        </>
    )
}

export default FinishedTask
