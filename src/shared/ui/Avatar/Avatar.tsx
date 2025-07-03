import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);
  return (
    <img src={src} style={styles} className={classNames(cls.Avatar, mods, [className])} alt={alt} />
  );
};

export { Avatar };
