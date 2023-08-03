import { ProductDTO } from "../models/product";

export function findAll(): ProductDTO[] {
  return products;
}

export function findById(id: number): ProductDTO | undefined {
  return products.find((x) => x.id === id);
}

const products: ProductDTO[] = [
  {
    id: 1,
    reference: 20014,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/0b94eb988f5f2be0e313d2e9f71cec2c18beca26cbdb1a7b1ba40b3c5ef36e4e.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 2,
    reference: 20015,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/9e660e983c601d66b1aa0b750d2c973f26d8f2e2b627558edb21c0731bfdd425.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Adultos",
      },
    ],
  },
  {
    id: 3,
    reference: 20016,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/4276e57326427a70a6cb7fe0206ddff9d0796bdda505c83464b3a26f85fd1bb6.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 4,
    reference: 20017,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/9f11394883d324919d102ef079abe02d5b80366075bccbaa3dde045df31e280b.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Adultos",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 5,
    reference: 20018,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/6babcf883703886fbbeea9565784da4e75d245e1cf6caced2b033406cfe7289b.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 6,
    reference: 20018,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/5ab35bc1ceedafc3e74f3804a9d03eb5c242c195790619dc6ecc3a856d7fb4c0.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Adultos",
      },
    ],
  },
  {
    id: 7,
    reference: 20012,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/56a9b1afaf07f4a763218102a6df0d3c6a4541270a9ea7ca912be342988d2711.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 8,
    reference: 20011,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/5ab35bc1ceedafc3e74f3804a9d03eb5c242c195790619dc6ecc3a856d7fb4c0.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Adultos",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 9,
    reference: 20022,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/9f11394883d324919d102ef079abe02d5b80366075bccbaa3dde045df31e280b.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 10,
    reference: 20023,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/f37cbf1b215760950c191c817b60de17aa8831f43d5b4da2fa44a2c68e1a2779.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 11,
    reference: 20044,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/ba965f24ebadd986437f11a6746a19c32b347798753a8f810991e4c07713001e.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 12,
    reference: 20055,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/23f90537bca9482c838daca9ff3219789592638e3249f9655fbf33546d83aa17.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
  {
    id: 13,
    reference: 20059,
    color: "Cristal",
    name: "Mocassim Furado Tratorado Corrente Miss-Miss®",
    brand: "Miss-Miss",
    gtin: 17908639107766,
    ncm: "6402.99.90",
    date: "2022-08-03T10:30:00Z",
    type: "GTIN_14",
    price: 39.9,
    imgUrl:
      "https://cnp30blob.blob.core.windows.net/cnp3filestemp/155c49be0258fbc72bcfd6547eca4cf996bd182c155508c7a79f2289ab72fad4.png",
    material: "Full Plastic",
    platformHeight: 1.7,
    collection: "Primavera Verão",
    categories: [
      {
        id: 1,
        name: "Infantil",
      },
      {
        id: 3,
        name: "Outros",
      },
    ],
  },
];
