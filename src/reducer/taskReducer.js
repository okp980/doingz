import uuid from "react-uuid";

export const taskReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					title: action.task.title,
					description: action.task.description,
					id: uuid(),
				},
			];

		case "DELETE_TODO":
			const newState = state.filter((task) => task.id !== action.id);
			localStorage.setItem("dis_task", JSON.stringify(newState));
			return newState;

		case "COMPLETE_TASK":
			const completedTasks = state.map((task) =>
				task.id === action.id ? { ...task, completed: !task.completed } : task
			);
			localStorage.setItem("dis_task", JSON.stringify(completedTasks));
			return completedTasks;

		default:
			return state;
	}
};
