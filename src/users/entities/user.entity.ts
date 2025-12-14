export class Parent {
    id!: number;
    phoneNumber!: string;
    firstName?: string;
    lastName?: string;
    createdAt!: Date;
}

export class Child {
    id!: number;
    firstName!: string;
    lastName!: string;
    dob!: Date;
    parentId!: string;
    createdAt!: Date;
}