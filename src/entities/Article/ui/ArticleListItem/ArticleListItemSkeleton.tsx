import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItemSkeleton.module.scss';
import { ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton = ({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.image} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} className={cls.image} />
        </div>
        <Skeleton width={150} height={16} className={cls.image} />
      </Card>
    </div>
  );
};

export { ArticleListItemSkeleton };
