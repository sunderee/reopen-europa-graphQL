import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CountryModel {
    @Field({ nullable: false })
    public ISO3!: string;

    @Field({ nullable: false })
    public name!: string;
}
