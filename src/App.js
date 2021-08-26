import "./App.css";
import DisplayTodo from "./component/DisplayTodo/DisplayTodo";
import Notification from "./component/Notification/Notification";
import AddTaskContextProvider from "./context/AddTaskContext/AddTaskContext";
import TaskContextProvider from "./context/taskContext";
import FinishedTasks from "./component/FinishedTasks/FinishedTasks";
import React, { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
	const { isLightTheme, toggleTheme } = useContext(ThemeContext);
	const backgroundTheme = isLightTheme ? "background" : "background dark";
	const theme = isLightTheme ? "App" : ["App", "dark"].join(" ");
	const navTheme = isLightTheme ? "nav" : ["nav", "dark"].join(" ");
	const iconTheme = isLightTheme ? "icon" : ["icon", "dark"].join(" ");
	const toggleThemeController = isLightTheme
		? "toggle"
		: ["toggle", "dark"].join(" ");
	return (
		<>
			<div className={backgroundTheme}></div>
			<div className={theme}>
				<div className={navTheme}>
					<div className="logo">
						<h1>Doingz App</h1>
					</div>
					<div className={toggleThemeController}>
						{isLightTheme ? (
							<FaSun className={iconTheme} onClick={() => toggleTheme()} />
						) : (
							<FaMoon className={iconTheme} onClick={() => toggleTheme()} />
						)}
					</div>
				</div>
				<TaskContextProvider>
					<Notification />
					<AddTaskContextProvider>
						<DisplayTodo />
					</AddTaskContextProvider>

					<FinishedTasks />
				</TaskContextProvider>
			</div>
		</>
	);
}

export default App;
