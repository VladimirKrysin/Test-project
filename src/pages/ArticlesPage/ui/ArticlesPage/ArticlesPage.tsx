import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList view={ArticleView.BIG} articles={[]} isLoading />
    </div>
  );
};

export default ArticlesPage;
