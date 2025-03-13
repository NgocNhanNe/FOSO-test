export type CategoryCount = {
  categoryName: string;
  count: number;
};

export type CategoryStyle = {
  color: string;
  backgroundColor: string;
};

export type BlogCard = {
  image: string;
  category: {
    name: string;
    style: CategoryStyle;
  };
  title: string;
  publishedAt: string;
  readingTime: number; // in minutes
};
