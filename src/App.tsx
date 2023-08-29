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

  const deleteTask = (id: number): void => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  const hideOrShowModal = (): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.toggle("hide")
  }


  return (
    <div>
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} />} />
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
            handleEdit={hideOrShowModal}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
