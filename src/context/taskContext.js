import React, { createContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";
import uuid from "react-uuid";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(taskReducer, [
		{
			title: "visit doctor",
			description: "i should really make out time to do this",
			id: uuid(),
			completed: false,
		},
		{
			title: "go to cinema",
			description: "i should really make out time to do this",
			id: uuid(),
			completed: false,
		},
		{
			title: "call my parents",
			description: "i should really make out time to do this",
			id: uuid(),
			completed: false,
		},
	]);
	return (
		<TaskContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContextProvider;
