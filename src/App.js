import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from "react"

const App = () => {

    const [showAddtask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "breakfast",
            day: "18 aug 10:00",
            reminder: true,
        },

        {
            id: 2,
            text: "workout",
            day: "18 aug 12:00",
            reminder: true,
        },

        {
            id: 3,
            text: "lunch",
            day: "18 aug 13:00",
            reminder: false,
        }]
    )

    // add task
    const addTask = (task) => {
        const id = Math.floor(Math.random()*10000)+1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    //del task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))

    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddtask)} showAdd={showAddtask}/>
            {showAddtask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "no tasks"
            }
        </div>
    )
}

export default App;
