import TopicDetailModel from "../models/TopicDetail.model";
import DataService from "../services/data.service";
import createDataStore from "../utils/dataStore.util";

interface Params {
  id: string;
}

const fetcher = async ({ id }: Params) => {
  const data = await new DataService().getTopicById(id);
  return data;
};

const useTopicDetailStore = createDataStore<TopicDetailModel, Params>(fetcher);

export default useTopicDetailStore;
