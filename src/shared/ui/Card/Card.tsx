import { classNames } from 'shared/lib/classNames/classNames';
import cls from './w.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Card = ({ className, children, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};

export { Card };
