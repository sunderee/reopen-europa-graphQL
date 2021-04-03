import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InfoModel {
    @Field({ nullable: false })
    public country!: string;

    @Field({ nullable: false })
    public title!: string;

    @Field({ nullable: false })
    public comment!: string;

    constructor(country: string, title: string, comment: string) {
        this.country = country;
        this.title = title;
        this.comment = comment;
    }
}
