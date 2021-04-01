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
			break;
		case "DELETE_TODO":
			return state.filter((task) => task.id !== action.id);
			break;
		case "COMPLETE_TASK":
			return state.map((task) =>
				task.id === action.id ? { ...task, completed: !task.completed } : task
			);
			break;

		default:
			return state;
	}
};
