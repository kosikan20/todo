import AddTodoForm from '@/components/AddTodoModal';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Todo Form Section */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Create New Todo</h2>
            <AddTodoForm />
          </div>
        </section>

        {/* Todo List Section */}
        <section className="bg-gray-50 rounded-lg p-6">
          <TodoList />
        </section>
      </div>
    </main>
  );
}
