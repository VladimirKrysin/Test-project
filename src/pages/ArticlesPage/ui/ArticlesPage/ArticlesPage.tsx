import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  return <div className={classNames(cls.ArticlesPage, {}, [className])}>ARTICLES PAGE</div>;
};

export default ArticlesPage;
