import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} key={index} className={cls.card} />);
};

const ArticleList = ({
  className,
  articles,
  view = ArticleView.SMALL,
  isLoading,
}: ArticleListProps) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id} className={cls.card} />;
  };

  if (isLoading) {
    return <div className={classNames(cls.ArticleList, {}, [className])}>{getSkeletons(view)}</div>;
  }
  return <div className={classNames(cls.ArticleList, {}, [className])}></div>;
};

export { ArticleList };
