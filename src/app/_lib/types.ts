export type CategoryCount = {
  categoryName: string;
  count: number;
};

export type CategoryStyle = {
  color: string;
  backgroundColor: string;
};

export type BlogCard = {
  id: number;
  image: string;
  category: {
    name: string;
    style: CategoryStyle;
  };
  title: string;
  publishedAt: string;
  readingTime: number;
  content?: string;
  highlight?: string;
};
