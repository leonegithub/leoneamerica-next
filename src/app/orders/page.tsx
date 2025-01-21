import Image from "next/image";
import customer from "./Leone90_stabilimento-61.jpg";
import "./style.css";

export default function Orders() {
  return (
    <div className="orders">
      <div className="img-container">
        <Image src={customer} alt="customer"></Image>
      </div>
      <div className="container">
        <h1 className="blue py-3 mt-3 text-6xl">Orders</h1>
        <p>
          Our most important resources are our customers, and we seek to care
          for these resources above all others. When you choose Leone products,
          you receive the benefits of our experienced and innovative research, a
          product manufactured with superior quality standards, and service that
          ensures you, our customer, comes first. Give us a call and discover
          our elevated customer service standards for yourself.
        </p>
        <h2 className="blue font-bold pt-4 pb-3 text-xl">Contact sales</h2>
        <p className="underline">
          <a href="mailto:">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2.5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              orders@test.leoneamerica.com
            </button>
          </a>
        </p>
        <h2 className="blue font-bold py-2 text-3xl">Trusted sellers</h2>
        <p>
          For more information on how to purchase Leone products, please call us
          at{" "}
          <a className="underline" href="tel:+(805) 487-9860">
            (805) 487-9860
          </a>
        </p>
      </div>
    </div>
  );
}
