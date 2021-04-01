import React, { useContext } from 'react'
import { FaCheck } from "react-icons/fa";
import { ThemeContext } from '../../context/themeContext';
const TaskFinished = ({task}) => {
	 const { isLightTheme } = useContext(ThemeContext);
	const theme = isLightTheme ? "taskfinished" : ["taskfinished", "dark"].join(" ");
    return (
        <div>
            <li className={theme}>
				
				
				<div style={{width:'100%', padding:5}}>
					<h5>{task.title}</h5>
					<p>{task.description}</p>
				</div>
				<FaCheck className="finishedicon" />
				
			</li>
        </div>
    )
}

export default TaskFinished
