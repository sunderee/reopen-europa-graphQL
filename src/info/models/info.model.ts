import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InfoModel {
    @Field({ nullable: false })
    country!: string;

    @Field({ nullable: false })
    title!: string;

    @Field({ nullable: false })
    comment!: string;

    constructor(country: string, title: string, comment: string) {
        this.country = country;
        this.title = title;
        this.comment = comment;
    }
}
