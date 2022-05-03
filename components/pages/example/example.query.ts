import { useCallback } from 'react';
import { useQuery } from 'react-query';

interface FetchTodosResponseDto {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const fetchTodos = (): Promise<FetchTodosResponseDto[]> =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());

export const useData = () =>
  useQuery(['todos'], fetchTodos, {
    select: useCallback((data: FetchTodosResponseDto[]) => data.map(({ userId, ...rest }) => rest, []), []),
  });
