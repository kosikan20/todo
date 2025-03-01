import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Todo } from '@/lib/types';

const API_URL = process.env.API_URL || 'http://localhost:3000/todo';

const useTodo = () => {
  const queryClient = useQueryClient();

  // Fetch all todos
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },
  });

  // Create todo
  const createTodo = useMutation({
    mutationFn: async (newTodo: Partial<Todo>) => {
      const todoWithDefaults = {
        ...newTodo,
      };
      const response = await axios.post(API_URL, todoWithDefaults);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  // Delete todo
  const deleteTodo = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${API_URL}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    todos,
    isLoading,
    error,
    createTodo: createTodo.mutate,
    deleteTodo: deleteTodo.mutate,
    isCreating: createTodo.isPending,
    isDeleting: deleteTodo.isPending,
  };
};

export default useTodo;
