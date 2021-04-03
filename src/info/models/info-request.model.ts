/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class InfoRequestModel {
    @Field((_type) => String, { nullable: false })
    from!: string;

    @Field((_type) => String, { nullable: false })
    to!: string;

    @Field((_type) => String, { nullable: true })
    transit?: string;
}
