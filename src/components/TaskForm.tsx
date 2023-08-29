import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'

//  css
import styles from './TaskForm.module.css'

// interfaces
import { ITask } from '../interfaces/Task'

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
}

const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    useEffect(() => {
        if(task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }

    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setId(Math.floor(Math.random() * 1000))
        
        const newTask: ITask = { id, title, difficulty }
        setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficulty(0)

        console.log(taskList)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.name === "title" ?
            setTitle(e.target.value) : setDifficulty(parseInt(e.target.value))
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