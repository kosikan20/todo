'use client';

import useTodo from '@/hooks/useTodo';

import TodoItem from '@/components/TodoItem';
import { Card } from '@/components/ui/card';

export default function TodoList() {
  const { todos = [], isLoading, error } = useTodo();

  if (isLoading)
    return (
      <Card>
        <p className="text-center text-gray-500">Loading...</p>
      </Card>
    );

  if (error)
    return (
      <Card>
        <p className="text-center text-gray-500">An error occurred.</p>
      </Card>
    );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">My Todos</h2>
      </div>

      {todos.length === 0 ? (
        <Card>
          <p className="text-center text-gray-500">No todos found. </p>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
