import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import { ThemeContext } from "../../context/themeContext";
import "./../../App.css";

const Notification = () => {
	const { tasks } = useContext(TaskContext);
	const { isLightTheme } = useContext(ThemeContext);
	const theme = isLightTheme
		? "notification"
		: ["notification", "dark"].join(" ");

	const completedTasks = tasks.filter((task) => task.completed === true);

	return (
		<div className={theme}>
			{tasks.length === 0 ? (
				<p>you have no task currently.</p>
			) : (
				<p>
					you have a total of <span>{tasks.length}</span> tasks currently and{" "}
					<span>{completedTasks.length}</span> tasks completed.
				</p>
			)}
		</div>
	);
};

export default Notification;
