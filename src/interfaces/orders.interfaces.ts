export interface Order{
    id:string;
    number:string;
    items:Item[];
    totals:{
        total:string;
    }
}

export interface Item{
    id:string;
    sku:string | null;
    name:string;
    quantity:string;
    price:string;
}