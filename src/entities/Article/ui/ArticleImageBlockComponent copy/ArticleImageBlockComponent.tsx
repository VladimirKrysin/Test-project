import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleImageBlock } from '../../model/types/article';
import { TextAlign } from 'shared/ui/Text/Text';
import { Text } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
};

export { ArticleImageBlockComponent };
