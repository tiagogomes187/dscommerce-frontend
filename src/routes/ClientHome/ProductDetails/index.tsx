import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
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
};

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product} />

        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Início" />
        </div>
      </section>
    </main>
  );
}
