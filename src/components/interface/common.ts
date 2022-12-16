export interface action<T = any> {
  type: string;
  payload?: T;
}

export interface Iproduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface aboutProduct {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
export const productData: Iproduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};
