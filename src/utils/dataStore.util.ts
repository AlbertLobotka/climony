import { createStore, resetStore } from "./stores.util";

interface Params {}

type Fetcher<T> = (params?: Params) => Promise<T>;

interface DataStoreState<T, P = Params> {
  loading: boolean;
  data: T;
  error?: string;
  actions: {
    getData: (filter?: P) => Promise<T>;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
  };
}

function createDataStore<T = any, P extends Params = Params>(
  fetcher: Fetcher<T>
) {
  const getData = (set: any, get: any) => async (params?: P) => {
    const { actions }: DataStoreState<T> = get();
    const { setLoading, setError } = actions;
    try {
      setLoading(true);

      const response = await fetcher(params);
      if (response) {
        set(
          (state: DataStoreState<T>) => {
            state.data = response;
            state.loading = false;
          },
          false,
          "getDataSuccess"
        );
      }
    } catch (error) {
      console.error("\x1b[35m get data error: ", error.message, "\x1b[0m");
      setError(error.message);
    }
  };

  const initialState: Omit<DataStoreState<T>, "actions"> = {
    loading: false,
    data: null,
  };
  const store = (set: any, get: any) => ({
    ...initialState,
    actions: {
      setLoading: (loading: boolean) => {
        set(
          (state: DataStoreState<T>) => {
            state.loading = loading;
          },
          false,
          "setLoading"
        );
      },
      setError: (error: string) => {
        set(
          (state: DataStoreState<T>) => {
            state.loading = false;
            state.error = error;
          },
          false,
          "setError"
        );
      },
      getData: getData(set, get),
    },

    reset: () => resetStore(initialState, set),
  });

  return createStore<DataStoreState<T>>(store);
}

export default createDataStore;
