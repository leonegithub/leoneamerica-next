import Image from "next/image";
import leoneAmericaSede from "./leoneamericasede.png";
import "./style.css";

const articles = [
  {
    title: "Our heritage",
    text: "The history of Leone began in the workshop of Mario Pozzi, a resourceful craftsman in 1934, and today continues as cutting-edge orthodontic manufacturing. From the beginning, the name Leone and the adoption of the trademark lionhead, a Florentine symbol of excellence, have stood as benchmarks of quality and consistently emulated everyday by the company, its products, and its employees. In 1993, Leone became a member of the OMA (Orthodontic Manufacturers Association), joining the twelve leading orthodontic manufacturers in the world. Today, manufacturing takes place in Florence, Italy, in a state-of-the-art facility. All products are custom designed and fabricated to the be the best available option on the market.On the other side of the globe, LeoneAmerica continues to sell the Leone line, which it has proudly done since 1971. Within more recent years, the new LeoneAmerica Dental Products, Inc has ventured to provide focused distribution and customer service to the United States, Canada, and Puerto Rico.",
  },
  {
    title: "Our future",
    text: "Research and development are at the core of Leone, and significant investments are made each year in the analysis, design, production, and clinical testing of new additions to the orthodontic line. For recent research initiatives and projects, please visit our “Publications” page.",
  },
  {
    title: "Our focus",
    text: "At Leone and LeoneAmerica, quality and customer service are paramount. These two goals drive the day-to-day functioning of both campuses and are considered at each step of the way. When you choose Leone products, you receive the benefits of our experience and innovative research, a product manufactured with superior quality standards, and service that ensures you, our customer comes first. Leone products are fabricated with only the highest caliber materials, and are engineered to meet leading manufacturing benchmarks. All Leone products are ISO and CE certified.",
  },
];

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="img-container">
        <Image src={leoneAmericaSede} alt="leone-america-sede"></Image>
        <div className="container mx:auto py-4">
          {articles.map((article, index) => (
            <div key={index}>
              <h1 className="py-3 font-bold">{article.title}</h1>
              <p>{article.text}</p>
            </div>
          ))}
        </div>
        <div className=" video-container">
          <div className="container mx:auto py-4">
            <h1 className="py-3 font-bold">
              Leone and Leone America work in tandem
            </h1>
            <p className="pb-3">
              To provide customers in North America with the best service
              possible. Manufacturing is handled entirely by Leone in Florence,
              Italy, where decades of experience and precision produce some of
              the most elite orthodontic products available on the market. These
              European-bred products then make the journey to the United States,
              where they are distributed by LeoneAmerica, either directly to
              customers or on to further resellers. Customers who choose Leone
              and LeoneAmerica can rest assured that they are receiving a
              superior imported product paired with priority local service – a
              combination engineered to provide our customers with the focus
              they deserve.
            </p>
          </div>
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/992647795?badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Leone S.p.A"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
