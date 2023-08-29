import styles from './TaskForm.module.css'

type Props = {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    return (
        <form className={styles.form}>
            <label>
                <span>Título:</span>
                <input type="text" placeholder="Título da tarefa" />
            </label>
            <label>
                <span>Dificuldade:</span>
                <input type="text" placeholder="Dificuldade da tarefa" />
            </label>
            <input type="submit" value={btnText} />
        </form>

    )
}

export default TaskForm