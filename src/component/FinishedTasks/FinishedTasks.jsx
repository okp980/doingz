import React, { useContext } from 'react'
import { TaskContext } from '../../context/taskContext'
import { ThemeContext } from '../../context/themeContext'
import TaskFinished from './TaskFinised'

const FinishedTask = (id) => {
    const {tasks} = useContext(TaskContext)
    const finishedTasks = tasks.filter(task => task.completed === true)
    const { isLightTheme } = useContext(ThemeContext);
	const theme = isLightTheme ? "finished" : ["finished", "dark"].join(" ");
	const infoTheme = isLightTheme ? "info" : ["info", "dark"].join(" ");
    return (
        <div>
            <ul className={theme}>
                {finishedTasks.length > 0 ? finishedTasks.map((task, index)=><TaskFinished key={index} task={task}/>) : (
                    <li className={infoTheme}>no completed task to display</li>
                )}
            </ul>
        </div>
    )
}

export default FinishedTask
