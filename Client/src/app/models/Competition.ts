import { Address } from "./Address";

export interface Competition {
    id?: number;
    title: string;
    description: string;
    image: string;
    address: Address;
}