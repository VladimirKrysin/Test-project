import { User } from 'entities/User';

enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export {
  Article,
  ArticleType,
  ArticleBlock,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleBlockBase,
  ArticleView,
};
