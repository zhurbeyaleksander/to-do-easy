import { addTask, removeTask, todaySelector, useAppDispatch } from "../../store"
import InputToDoText from "./InputToDoText"
import { useState } from 'react'
import { useSelector } from "react-redux"

import './styles.css';



export const TodayList = () => {
    const dispatch = useAppDispatch()
    const { items } = useSelector(todaySelector)
    const [value, setValue] = useState('')
    const addToDo = () => {
        if (value) {
            dispatch(addTask(value))
            setValue('')
        }
    }
    const deleteToDo = (id: string) => {
        dispatch(removeTask(id))
    }
    const handleChangeText = (str: string) => {
        setValue(str);
    }
    console.log(items)

    return (
        <div className="task-page">
            <div className="task-page_content">
                <h1>task list</h1>
                <InputToDoText addToDo={addToDo} value={value} handleChangeText={handleChangeText} />
                <ul className="task-list">
                    {
                        items.map((item) => (
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <button onClick={() => deleteToDo(item.id)}>x</button>
                            </li>
                        ))}

                </ul>
            </div>
        </div>
    )
}