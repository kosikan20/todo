import { Todo } from '@/lib/types';
import { Button } from '@/components/ui/button';
import useTodo from '@/hooks/useTodo';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo } = useTodo();

  const onDelete = (id: string) => {
    console.log('Delete todo:', id);
    deleteTodo(todo.id);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-1">{todo.title}</h3>
          {todo.description && (
            <p className="text-gray-600 mb-3">{todo.description}</p>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(todo.id)}
        >
          Done
        </Button>
      </div>
    </div>
  );
}
