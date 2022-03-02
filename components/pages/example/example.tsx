import { Typography } from '../../atoms';

import { useData } from './example.query';

import styles from './example.module.scss';

export const Example = () => {
  const { isLoading, data } = useData();

  // NOTE: example 이라 pages 에서 로직을 처리했으나, atomic pattern 에서는 template 에서 처리하는 게 권장됨

  return (
    <>
      <Typography as="h1" className={styles.title}>
        Example Page
      </Typography>
      {isLoading ? (
        'loading...' // maybe spinner or skeleton ui
      ) : (
        <ul className={styles.list}>
          {data?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
