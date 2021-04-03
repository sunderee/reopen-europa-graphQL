/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { InfoModel } from './models';

@Injectable()
export class InfoService {
    constructor(private readonly apiService: ApiService) { }

    public async fetchTravelInfoWithoutTransit(
        from: string,
        to: string
    ): Promise<Array<InfoModel> | undefined> {
        const request = await this.apiService.makeGetRequest<
            Array<Record<string, any>>
        >(
            'https://reopen.europa.eu/api/covid/v1/eutcdata/',
            `fromto/en/${from}/${to}`
        );
        if (request !== undefined && request.length === 2) {
            const fromInfoRequest = request[0];
            if (fromInfoRequest !== undefined) {
                const fromInfo = new InfoModel(
                    from,
                    fromInfoRequest['indicators'][0]['indicator_name'],
                    fromInfoRequest['indicators'][0]['comment']
                );
                const toInfoRequest = request[1];
                if (toInfoRequest !== undefined) {
                    const rule = toInfoRequest['indicators'][0][
                        'rules'
                    ][0] as number;
                    const toRequest = await this.apiService.makeGetRequest<
                        Record<string, any>
                    >(
                        'https://reopen.europa.eu/api/covid/v1/eutcdata/',
                        `data/en/${to}/${rule}`
                    );
                    return toRequest !== undefined
                        ? [
                            fromInfo,
                            new InfoModel(
                                to,
                                toRequest['indicators'][0]['indicator_name'],
                                toRequest['indicators'][0]['comment'],
                                toRequest['indicators'][0]['value']
                            )
                        ]
                        : undefined;
                }
                return undefined;
            }
            return undefined;
        }
        return undefined;
    }
}
