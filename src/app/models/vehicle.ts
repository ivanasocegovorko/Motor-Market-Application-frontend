import { User } from "./user";

export class Vehicle {
    vehicleId?: string;
    make?: string;
    model?: string;
    year?: number;
    colour?: string;
    photo?: string;
    price?: number;
    user?: User;
    userId?: number;

    constructor(id?: string, make?: string, model?: string, year?: number, colour?: string, photo?: string, price?: number, user?: User, userId?: number) {
        this.vehicleId = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.colour = colour;
        this.photo = photo;
        this.price = price;
        this.user = user;
        this.userId = userId;
    }
}