import "./styles.css";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product : ProductDTO = {
  id: 1,
  reference: 20014,
  color: "Cristal",
  name: "Sandália Infantil Flat Led",
  brand: "Miss-Miss",
  gtin: 17908639107766,
  ncm: "6402.99.90",
  date: "2022-08-03T10:30:00Z",
  type: "GTIN_14",
  price: 39.9,
  imgUrl:
    "https://cnp30blob.blob.core.windows.net/cnp3files/1c78f84d0dd5225b3ce758420394782d86e1066153c81632ee4c5b20e1f87708.png",
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
    <>
      <HeaderClient />

      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />

          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
