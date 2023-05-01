import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface ICreateZustand {
  persist?: PersistOptions<any>;
}

const createStore = <T>(store: any, options?: ICreateZustand) => {
  let _store: any = store;

  if (options?.persist) {
    _store = persist(_store, options.persist);
  }

  return create<T>(_store);
};

const resetStore = (initState: any, set: any) => {
  set((state: any) => {
    Object.keys(initState).forEach((k: any) => {
      state[k] = initState[k];
    });
  });
};

export { createStore, create as createZustand, resetStore };
