import { User } from "./user";

export class Vehicle {
    vehicleId?: number;
    make?: string;
    model?: string;
    year?: number;
    colour?: string;
    photo?: string;
    price?: number;
    user?: User;
    userId?: number;
    userEmail?: string;

    constructor(id?: number, make?: string, model?: string, year?: number, colour?: string, photo?: string, price?: number, user?: User, userId?: number, userEmail?: string) {
        this.vehicleId = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.colour = colour;
        this.photo = photo;
        this.price = price;
        this.user = user;
        this.userId = userId;
        this.userEmail = userEmail;
    }
}