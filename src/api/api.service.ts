import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    public async makeGetRequest<T>(
        baseURL: string,
        endpoint?: string
    ): Promise<T | undefined> {
        const result = await axios.get<T>(
            endpoint !== undefined ? baseURL + endpoint : baseURL,
            {
                method: 'GET',
                responseType: 'json'
            }
        );
        return result.status === 200 ? result.data : undefined;
    }
}
