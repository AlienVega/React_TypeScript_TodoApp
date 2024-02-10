import { ChangeEvent, FC } from "react";
import { useState } from "react";
import "./App.css";
import { todotype } from "./apptypes";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workday, setWorkday] = useState<number>(0);
  const [todoList, setTodoList] = useState<todotype[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkday(Number(event.target.value));
    }
  };

  const addNewTask = (): void => {
    const newTask = { taskname: task, workDay: workday };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkday(0);
  };
  const deleteTasks = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskname !== nameToDelete;
      })
    );
  };
  return (
    <>
      <div className="maincard">
        <input
          className="maininput"
          type="text"
          value={task}
          name="task"
          onChange={handleChange}
          placeholder="Taskınızı Giriniz..."
        />
        <input
          className="maininput"
          type="number"
          value={workday}
          name="workday"
          onChange={handleChange}
          placeholder="Kaç Günde tamamlamalısınız"
        />
        <button className="mainButton" onClick={addNewTask}>
          Yeni Task Ekle
        </button>
      </div>
      <div className="todocard">
        {todoList.map((task: todotype, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTasks} />;
        })}
      </div>
    </>
  );
};

export default App;
