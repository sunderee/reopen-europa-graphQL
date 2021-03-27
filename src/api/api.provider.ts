import get, { AxiosResponse, ResponseType } from 'axios';

export class ApiProvider {
    private static instance: ApiProvider;
    public static getInstance(baseURL: string): ApiProvider {
        if (!ApiProvider.instance) {
            ApiProvider.instance = new ApiProvider(baseURL);
        }
        return ApiProvider.instance;
    }

    constructor(private readonly baseURL: string) {}

    public async makeGetRequest<T>(
        responseType: ResponseType = 'json',
        endpoint?: string
    ): Promise<T | undefined> {
        const getResult = (await get({
            url:
                endpoint !== undefined ? this.baseURL + endpoint : this.baseURL,
            method: 'GET',
            responseType: responseType
        })) as AxiosResponse<T>;
        return getResult.status === 200 ? getResult.data : undefined;
    }
}
