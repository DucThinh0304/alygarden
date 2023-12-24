export type ProductsType = {
  id: string;
  createAt: Date;
  title: string;
  desc: string;
  img?: string;
  price: number;
  star: number;
  isFeature: Boolean;
  option: String[];
  catSlug: String;
  options?: { title: string; additionalPrice: number }[];
}[];

export type ProductType = {
  id: string;
  createAt: Date;
  title: string;
  desc: string;
  img?: string;
  price: number;
  star: number;
  isFeature: Boolean;
  option: String;
  catSlug: String;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};
