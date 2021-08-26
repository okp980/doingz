import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TaskContext } from "../../../context/taskContext";
import { ThemeContext } from "../../../context/themeContext";

const Task = ({ taskItem }) => {
	const { dispatch } = useContext(TaskContext);
	const [isChecked, setIsChecked] = useState(taskItem.completed ? true : false)

	const toggleCheckbox = () => {
		setIsChecked(
			isChecked => isChecked = !isChecked
		)

		dispatch({ type: 'COMPLETE_TASK', id: taskItem.id })
	}

	const { isLightTheme } = useContext(ThemeContext);
	const iconTheme = isLightTheme ? "icon" : ["icon", "dark"].join(" ");
	const contentTheme = isLightTheme ? "list-content" : ["list-content", "dark"].join(" ");

	return (
		<>
			<li className={contentTheme}>

				<input type='checkbox' checked={isChecked} onChange={toggleCheckbox} />
				<div style={{ width: '100%' }}>
					<div>
						<h5>{taskItem.title}</h5>
					</div>
					<div>
						<p>{taskItem.description}</p>
					</div>
				</div>
				<div>
					<FaTrash
						className={iconTheme}
						onClick={() => dispatch({ type: "DELETE_TODO", id: taskItem.id })}
					/>
				</div>
			</li>
		</>
	);
};

export default Task;
