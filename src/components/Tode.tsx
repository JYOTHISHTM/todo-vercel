import type { Todo } from "../types";
import { CheckCircle, Trash2 } from "lucide-react";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: Props) => {
  const handleToggle = () => toggleTodo(todo.id);
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  };

  return (
    <div
      className="flex justify-between items-center bg-white px-5 py-4 rounded-2xl shadow-md mb-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] focus-within:shadow-xl"
      onClick={handleToggle}
      role="button"
      aria-pressed={todo.completed}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleToggle();
      }}
    >
      <div className="flex items-center gap-4 flex-1">
        {todo.completed ? (
<CheckCircle className="text-green-500 w-6 h-6">
  <title>Mark as Incomplete</title>
</CheckCircle>
        ) : (
<CheckCircle className="text-green-500 w-6 h-6">
  <title>Mark as Incomplete</title>
</CheckCircle>
        )}
        <span
          className={`text-lg font-medium transition-all duration-300 ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800 hover:text-blue-600"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={handleDelete}
        className="p-2 rounded-full hover:bg-red-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
        title="Delete"
        aria-label={`Delete todo: ${todo.text}`}
      >
        <Trash2 className="text-red-500 w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoItem;
