import { useData } from './example.query';

export const Example = () => {
  const { data } = useData();

  console.log(data);

  return <div>check console</div>;
};
