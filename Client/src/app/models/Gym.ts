import { Address } from "./Address";

export interface Gym {
    id?: number;
    title: string;
    description: string;
    image: string;
    address: Address;
}