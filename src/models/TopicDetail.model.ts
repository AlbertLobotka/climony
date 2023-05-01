import ArticleModel from "./Article.model";

interface TopicDetailModel {
  id: string;
  category: string;
  title: string;
  description: string;
  color: string;
  articles: ArticleModel[];
}

export default TopicDetailModel;
