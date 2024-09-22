import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../api/apiSlice";

import { useState } from "react";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const maxId =
      todos.length > 0 ? Math.max(...todos.map((todo) => Number(todo.id))) : 0;
    const newId = maxId + 1;

    addTodo({ id: newId, userId: 1, title: newTodo.trim(), completed: false });
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit} className="flex gap-3 my-10">
      <input
        type="text"
        value={newTodo}
        className="bg-slate-700 text-white px-3 py-2 outline-none rounded-md flex-1"
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new item"
      />
      <button
        type="submit"
        className="bg-sky-900 p-2 rounded-sm hover:shadow-md hover:shadow-sky-800 cursor-pointer"
        disabled={!newTodo.trim() || isLoading || isError}
      >
        Add
      </button>
    </form>
  );

  let content;
  if (isError) {
    content = <div>Error: {error.message}</div>;
  } else if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isSuccess) {
    content = <div>No data</div>;
  } else {
    content = (
      <div className="space-y-4 pb-10">
        {todos.map((todo) => (
          <article
            key={todo.id}
            className="flex justify-between items-center gap-3"
          >
            <div className="space-x-2">
              <input
                type="checkbox"
                className="size-4 cursor-pointer"
                checked={todo.completed}
                id={todo.id}
                onChange={() =>
                  updateTodo({ ...todo, completed: !todo.completed })
                }
              />
              <label htmlFor={todo.id}>{todo.title}</label>
            </div>
            <button
              className="bg-red-600 p-1 rounded-sm"
              onClick={() => {deleteTodo({ id: todo.id })}}
            >
              delete
            </button>
          </article>
        ))}
      </div>
    );
  }

  return (
    <main>
      {newItemSection}
      {content}
    </main>
  );
}
