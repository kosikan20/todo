'use client';

import { useState } from 'react';
import { Todo } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useTodo from '@/hooks/useTodo';

export default function AddTodoForm() {
  const { createTodo } = useTodo();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Todo>>({
    title: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title?.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      createTodo({
        title: formData.title,
        description: formData.description,
      });
      setFormData({ title: '', description: '' });
    } catch (err: any) {
      setError(err?.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <p className="block text-gray-700 text-sm font-medium mb-1">Title</p>
        <Input
          name="title"
          value={formData.title}
          placeholder="Enter todo title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <p className="block text-gray-700 text-sm font-medium mb-1">
          Description
        </p>
        <textarea
          name="description"
          value={formData.description || ''}
          placeholder="Enter todo description (optional)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={3}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Todo'}
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
