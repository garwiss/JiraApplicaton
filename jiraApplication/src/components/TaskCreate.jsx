import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';



function TaskCreate({ onCreate, task, taskFormUpdate }) {
    const [title, setTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");

    // console.log(title,taskDesc)

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // sayfa yenilenmesi engelleme


        if (taskDesc.trim() === "") {
            toast.error("Boş task gönderilemez", { autoClose: 1000 });
            return;
        } else if (title.trim() === "") {
            toast.error("Boş task gönderilemez", { autoClose: 1000 });
            return;
        }
        else {
            onCreate(title, taskDesc);
            setTitle("");
            setTaskDesc("");
            toast("Task Gönderildi", { autoClose: 1000 })
        }



    }

    return (

        <div>
            {taskFormUpdate ? <div className="formApp">
                <h3>Lütfen Task Ekleyiniz</h3>
                <form className="task-form">
                    <label htmlFor="input" className="task-label">Başlık</label>
                    <input value={title} onChange={handleChange} className="task-input" />
                    <label htmlFor="messsage" className="task-label">Task Giriniz</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={7} />
                    <button className="task-button" onClick={handleSubmit}>Oluştur</button>
                </form>
                <ToastContainer position="top-right" autoClose={4000} />

            </div> : <div className="formApp">
                <h3>Lütfen Task Ekleyiniz</h3>
                <form className="task-form">
                    <label htmlFor="input" className="task-label">Başlık</label>
                    <input value={title} onChange={handleChange} className="task-input" />
                    <label htmlFor="messsage" className="task-label">Task Giriniz</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={7} />
                    <button className="task-button" onClick={handleSubmit}>Oluştur</button>
                </form>
                <ToastContainer position="top-right" autoClose={4000} />
            </div>}</div>



    );
}

export default TaskCreate;