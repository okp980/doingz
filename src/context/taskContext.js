import React, { createContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

export const TaskContext = createContext();

const init = () => {
	const storageData = JSON.parse(localStorage.getItem("dis_task"));
	if (storageData) {
		if (storageData.length > 0) {
			return storageData;
		}
	}
	return [];
};

const TaskContextProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(taskReducer, [], init);
	return (
		<TaskContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContextProvider;
