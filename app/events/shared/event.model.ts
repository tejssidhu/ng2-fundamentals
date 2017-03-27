export interface IEvent {
<<<<<<< HEAD
    id:number
    name:string
    date:Date
    time:string
    price:number
    imageUrl:string
=======
    id: number
    name: string
    date: Date
    time: string
    price: number
    imageUrl: string
>>>>>>> b0b8515cfa8e8c1020feb51945633487f4ecc48c
    location?: {
        address: string
        city: string
        country: string
<<<<<<< HEAD
    },
    onlineUrl?: string,
=======
    }
    onlineUrl?: string
>>>>>>> b0b8515cfa8e8c1020feb51945633487f4ecc48c
    sessions: ISession[]
}

export interface ISession {
<<<<<<< HEAD
    id:number
    name:string
    presenter:string
    duration:number
    level:string
=======
    id: number
    name: string
    presenter: string
    duration: number
    level: string
>>>>>>> b0b8515cfa8e8c1020feb51945633487f4ecc48c
    abstract: string
    voters: string[]
}