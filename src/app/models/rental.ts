export interface Rental {
    id: number,
    customerFirstName: string;
    customerLastName: string;
    companyName: string;
    carBrand: string;
    carModel: number,
    carDescription: string;
    rentDate: Date;
    returnDate: Date;
}