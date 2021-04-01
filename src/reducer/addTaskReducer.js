export const addTaskReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return true;
		case "CLOSE_TASK":
			return false;
		default:
			throw new Error();
	}
};
