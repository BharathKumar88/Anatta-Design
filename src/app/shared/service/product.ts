declare namespace products {
    export interface Product {
        name: string;
        description: string;
        color: string;
        price: number;
        id: number;
    }
    export interface ProductImage {
        url: string;
        id: number;
        productId: number;
    }
}