import { TopicModel } from "../models/Topic.model";
import DataService from "../services/data.service";
import createDataStore from "../utils/dataStore.util";

const fetcher = async () => {
  const data = await new DataService().getTopics();
  return data;
};

const useTopicsStore = createDataStore<TopicModel[]>(fetcher);

export default useTopicsStore;
