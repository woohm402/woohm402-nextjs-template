import classNames from 'classnames';

import styles from './typography.module.scss';

import type { PropsWithChildren } from 'react';

interface Props {
  as: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Typography = ({ as: Tag, children, className }: PropsWithChildren<Props>) => {
  return <Tag className={classNames(className, styles.wrapper)}>{children}</Tag>;
};
