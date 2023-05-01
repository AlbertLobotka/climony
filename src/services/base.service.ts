import { Axios } from "axios";

export class BaseService {
  baseUrl = "http://localhost:3001/";
  axios: Axios;
  constructor() {
    this.axios = new Axios({ baseURL: this.baseUrl });
  }
  get<T = any>(url: string) {
    return this.axios.get<T>(url).then((response) => {
      return JSON.parse(response.data as string);
    });
  }
  post<T = any>(url: string, data: any) {
    return this.axios.post<T>(url, data).then((response) => response.data);
  }
}
