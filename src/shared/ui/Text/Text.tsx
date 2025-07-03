import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

const Text = memo((props: TextProps) => {
  const { className, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
  };
  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

export { Text, TextTheme, TextAlign };
