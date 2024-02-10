import { todotype } from "./apptypes";
type propsType = {
  task: todotype;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: propsType) {
  return (
    <div className="card">
      <div>
        <p className="taskp">{task.taskname}</p>
        <p className="taskp">{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskname)}>Sil</button>
      </div>
    </div>
  );
}

export default TodoItem;
