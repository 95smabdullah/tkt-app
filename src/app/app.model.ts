export interface FlightResponse{
    id:number;
    name:string;
    src:string;
    dest:string;
    fare:number;
}

export interface FlightRequest{
    name:string;
    src:string;
    dest:string;
    fare:number;
}

export interface UserResponse{
    id:number;
    user:string;
    password:string;
}

export interface UserRequest{
    user:string;
    password:string;
}

export interface BookingResponse{
    id:number;
    flightId:number;
    userId:number;
    flightResponse:FlightResponse;
}

export interface BookingRequest{
    flightId:number;
    userId:number;
}