import Image from "next/image";
import customer from "./Leone90_stabilimento-61.jpg";

export default function Orders() {
  return (
    <div className="orders">
      <div className="img-container">
        <Image src={customer} alt="customer"></Image>
      </div>
      <div className="container">
        <h1 className="blue py-3 font-bold">Orders</h1>
        <p>
          Our most important resources are our customers, and we seek to care
          for these resources above all others. When you choose Leone products,
          you receive the benefits of our experienced and innovative research, a
          product manufactured with superior quality standards, and service that
          ensures you, our customer, comes first. Give us a call and discover
          our elevated customer service standards for yourself.
        </p>
        <h2>Contact sales</h2>
        <p>orders@test.leoneamerica.com</p>
        <h2>Trusted sellers</h2>
        <p>
          For more information on how to purchase Leone products, please call us
          at (805) 487-9860
        </p>
      </div>
    </div>
  );
}
