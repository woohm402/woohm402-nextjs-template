import { useQuery } from 'react-query';

const fetchTodos = () => fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());

export const useData = () => useQuery(['todos'], fetchTodos);
