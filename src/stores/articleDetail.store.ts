import ArticleDetailModel from "../models/ArticleDetail.model";
import DataService from "../services/data.service";
import createDataStore from "../utils/dataStore.util";

interface Params {
  topicId: string;
  articleId: string;
}

const fetcher = async ({ topicId, articleId }: Params) => {
  const data = await new DataService().getArticleDetail(topicId, articleId);
  return data;
};

const useArticleDetailStore = createDataStore<ArticleDetailModel, Params>(
  fetcher
);

export default useArticleDetailStore;
