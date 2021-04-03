import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Direction } from 'src/countries/countries.service';

@Injectable()
export class CountriesPipe implements PipeTransform {
    transform(value: Direction | undefined, metadata: ArgumentMetadata): Direction {
        if (value !== undefined && metadata.type === 'query' && metadata.metatype === String) {
            const data = metadata.data ?? '';
            if (data === 'direction') {
                if (value === 'from' || value === 'to') {
                    return value;
                }
                throw new BadRequestException(
                    'Empty GET parameter',
                    'Direction parameter should be either \'from\' or \'to\''
                );
            }
            throw new BadRequestException(
                'Incorrect GET parameter',
                'This endpoint requires \'direction\' parameter, which should either be \'from\' or \'to\''
            );
        }
        throw new BadRequestException(
            'Missing GET parameter',
            'You are missing a \'direction\' parameter, which should either be \'from\' or \'to\''
        );
    }
}
