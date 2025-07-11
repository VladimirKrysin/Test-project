import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon = ({ className, Svg }: IconProps) => {
  return <Svg className={classNames(cls.Icon, {}, [className])} />;
};

export { Icon };
