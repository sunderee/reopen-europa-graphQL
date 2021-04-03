import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InfoModel {
    @Field({ nullable: true })
    public indicatorValue?: string;

    @Field({ nullable: false })
    public country!: string;

    @Field({ nullable: false })
    public title!: string;

    @Field({ nullable: false })
    public comment!: string;

    constructor(
        country: string,
        title: string,
        comment: string,
        value?: string
    ) {
        this.country = country;
        this.title = title;
        this.comment = comment;
        this.indicatorValue = value;
    }
}
