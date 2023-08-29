import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

//  css
import styles from './TaskForm.module.css'

// interfaces
import { ITask } from '../interfaces/Task'

type Props = {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTilte] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent) => {
        e.preventDefault()
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
                />
            </label>
            <label>
                <span>Dificuldade:</span>
                <input
                    type="text"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value={btnText} />
        </form>

    )
}

export default TaskForm