/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { InfoModel } from './models';

@Injectable()
export class InfoService {
    constructor(private readonly apiService: ApiService) {}

    async fetchTravelInfoTransit(from: string, to: string, transit?: string): Promise<Array<InfoModel>> {
        const request = await this.apiService.makeGetRequest<Array<Record<string, any>>>(
            'https://reopen.europa.eu/api/covid/v1/eutcdata/',
            transit !== undefined ? `fromto/en/${from}/${to}/${transit}` : `fromto/en/${from}/${to}`
        );
        return request !== undefined ? await this.handleRequests(request) : [];
    }

    private async handleRequests(requests: Array<Record<string, any>>): Promise<Array<InfoModel>> {
        const infos = new Array<InfoModel>();
        const firstRequest = requests.shift();
        if (firstRequest !== undefined) {
            infos.push(
                new InfoModel(
                    firstRequest['nutscode'],
                    firstRequest['indicators'][0]['indicator_name'],
                    firstRequest['indicators'][0]['comment'].replace(/<[^>]+>/g, '').replace(/[!?.]\w/, ' ')
                )
            );
            for (const request of requests) {
                const rule = request['indicators'][0]['rules'][0] as number;
                const ruleRequest = await this.apiService.makeGetRequest<Array<Record<string, any>>>(
                    'https://reopen.europa.eu/api/covid/v1/eutcdata/',
                    `data/en/${request['nutscode']}/${rule}`
                );
                if (ruleRequest !== undefined) {
                    infos.push(
                        new InfoModel(
                            ruleRequest[0] !== undefined ? ruleRequest[0]['nutscode'] : '',
                            ruleRequest[0] !== undefined ? ruleRequest[0]['indicators'][0]['indicator_name'] : '',
                            ruleRequest[0] !== undefined
                                ? ruleRequest[0]['indicators'][0]['comment']
                                    .replace(/<[^>]+>/g, '')
                                    .replace(/[!?.]\w/, ' ')
                                : ''
                        )
                    );
                }
            }
        }
        return infos;
    }
}
