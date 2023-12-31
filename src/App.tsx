import { useState } from 'react'
import styles from './App.module.css'

// components
import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Modal from './components/Modal'

// interface
import { ITask } from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number): void => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  const hideOrShowModal = (): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.toggle("hide")
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal()
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number): void => {
    const updatedTask: ITask = { id, title, difficulty }

    const updatedItems = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
    
    setTaskList(updatedItems)
    hideOrShowModal()
  }


  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText='Editar Tarefa'
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText='Criar Tarefa'
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
