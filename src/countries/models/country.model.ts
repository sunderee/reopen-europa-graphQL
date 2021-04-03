import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CountryModel {
    @Field({ nullable: false })
    ISO3!: string;

    @Field({ nullable: false })
    name!: string;
}
