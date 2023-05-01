import ArticleDetailModel from "../models/ArticleDetail.model";
import { TopicModel } from "../models/Topic.model";
import TopicDetailModel from "../models/TopicDetail.model";
import { BaseService } from "./base.service";

export default class DataService extends BaseService {
  getTopics(): Promise<TopicModel[]> {
    return this.get("topics");
  }
  getTopicById(id: string): Promise<TopicDetailModel> {
    return this.get(`topics/${id}`);
  }
  getArticleDetail(
    topicId: string,
    articleId: string
  ): Promise<ArticleDetailModel> {
    return this.get(`topics/${topicId}/${articleId}`);
  }
}
