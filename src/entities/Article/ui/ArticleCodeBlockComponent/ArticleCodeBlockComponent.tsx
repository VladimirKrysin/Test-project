import { classNames } from 'shared/lib/classNames/classNames';
import cls from './rticleCodeBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      ArticleCodeBlockComponent
    </div>
  );
};

export { ArticleCodeBlockComponent };
