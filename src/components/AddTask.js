import {useState} from "react"

const AddTask = ( {onAdd}) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("please enter a name")
            return
        }
        if(!day){
            alert("please enter a date and time")
            return
        }
        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)
    }


    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label> task </label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control ">
                <label> day & time </label>
                <input type="text" placeholder="add day & time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label> Set reminder </label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input className="btn btn-block" type= 'submit' value="safe task"/>
        </form>
    );
};

export default AddTask;