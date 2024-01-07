import { toast } from "react-toastify";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(task.id)
        toast("Silme işlemi başarılı", { autoClose: 1000 })
    };

    const handleUpdateClick = () => {
        setShowEdit(true);

    };


    console.log(task)
    return (
        <div className="task-show">
            {
                showEdit ? <TaskCreate task={task} taskFormUpdate={true} /> :
                    <div className="formApp-2">
                        <h3 className="task-title">Göreviniz</h3>
                        <p>{task.title}</p>
                        <h3 className="task-title">Yapılacaklar</h3>
                        <p>{task.taskDesc}</p>
                        <div >
                            <button className="task-delete-button" onClick={handleDeleteClick}>Sil</button>
                            <button className="task-update-button" onClick={handleUpdateClick}>Güncelle</button>
                        </div>

                    </div>

            }


        </div>
    );
}

export default TaskShow;