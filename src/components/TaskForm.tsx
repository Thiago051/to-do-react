type Props = {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    return (
        <form>
            <div>
                <label>
                    Título:
                    <input type="text" placeholder="Título da tarefa" />
                </label>
            </div>
            <div>
                <label>
                    Dificuldade:
                    <input type="text" placeholder="Dificuldade da tarefa" />
                </label>
            </div>
            <input type="submit" value={btnText} />
        </form>

    )
}

export default TaskForm