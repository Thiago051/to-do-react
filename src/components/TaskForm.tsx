import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'

//  css
import styles from './TaskForm.module.css'

// interfaces
import { ITask } from '../interfaces/Task'

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTilte] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)
        
        const newTask: ITask = { id, title, difficulty }
        setTaskList!([...taskList, newTask])

        setTilte("")
        setDifficulty(0)

        console.log(taskList)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.name === "title" ?
            setTilte(e.target.value) : setDifficulty(parseInt(e.target.value))
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <label>
                <span>Título:</span>
                <input
                    type="text"
                    name="title"
                    placeholder="Título da tarefa"
                    onChange={handleChange}
                    value={title}
                />
            </label>
            <label>
                <span>Dificuldade:</span>
                <input
                    type="text"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa"
                    onChange={handleChange}
                    value={difficulty}
                />
            </label>
            <input type="submit" value={btnText} />
        </form>

    )
}

export default TaskForm