import React, {useContext, useState} from 'react'
import { AddTaskContext } from '../../context/AddTaskContext/AddTaskContext'
import { TaskContext } from '../../context/taskContext'
import { ThemeContext } from '../../context/themeContext'

const AddTask = () => {
    const {dispatch}= useContext(TaskContext)
    const {dispatch:dispactcher} = useContext(AddTaskContext)
    const [task, setTask] = useState({title:'', description:''})
    const { isLightTheme, toggleTheme } = useContext(ThemeContext);
    const ButtonTheme = isLightTheme ? "button" : ["button", "dark"].join(" ");

    const handleTitlechange=(e)=>{
        setTask({title: e.target.value, descripion:task.description})
    }
    const handleDescriptionchange=(e)=>{
        setTask({description: e.target.value, title: task.title})
    }
    const handleSumit = e =>{
        
    e.preventDefault();
   if(task.title && task.description ){
        dispatch({
    type:'ADD_TODO',
    task:{
            title:task.title,
            description: task.description
               }
           })

           setTask({title:'', description:''})
           dispactcher({type:'CLOSE_TASK'})
   }
    }
    return (
        <>
        <form className='form'>
           <div className="field">
                <label htmlFor="title">title</label>
            <input 
            type='text' 
            name='title'
            placeholder='Enter Title' 
            maxLength='15'
            value={task.title} 
            onChange={handleTitlechange}/>
           </div>
           <div className="field">
                <label htmlFor="description">description</label>
            <textarea  placeholder='Enter info' value={task.description} 
            onChange={handleDescriptionchange} maxLength='36' ></textarea>
           </div>
           <button className={ButtonTheme} type='submit' onClick={handleSumit}>sumit</button>
        </form>
        </>
    )
}

export default AddTask
