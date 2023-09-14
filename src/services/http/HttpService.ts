import axios from "axios";

abstract class HttpService {

    protected async fetchDataFromAPI<Type>(url: string): Promise<Response> {
        return await axios(url);
    }

    protected convertResponseToJSON<Type>(res: any): Type {
        return res.data;
    }
}

export default HttpService;