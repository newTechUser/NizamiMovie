export interface Seat {
    row: string;
    number: number;
    price: number;
    status: "available" | "booked" | "selected";
}
