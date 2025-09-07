import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../common/Card";

import "./About.css";

export const About = () => {
  return (
    <section className="section">
      <div className="section__content" id="about">
        <h2 className="section__title">About Us</h2>
        <div className="about__content">
          <div className="about__content-text">
            <p className="section__description">
              Tiger Zambezi Investments Limited is headquartered in Lusaka,
              Zambia, with a Pan‑African outlook. We build resilient value
              chains from mine to market and farm to trade routes—anchored by
              integrity, innovation, sustainability, excellence, and
              partnership.
            </p>
            <div className="about__cards">
              {[
                {
                  title: "Mission",
                  text: "Create long‑term value by responsibly exploring, developing and trading Africa’s resources while empowering communities.",
                },
                {
                  title: "Vision",
                  text: "Be a leading Pan‑African investment company recognized for innovation, sustainability and operational excellence.",
                },
                {
                  title: "Values",
                  text: "Integrity • Innovation • Sustainability • Excellence • Partnership",
                },
                {
                  title: "Focus",
                  text: "Natural resources, logistics and commodity trade with strong local partnerships.",
                },
              ].map((e) => (
                <Card key={e.title} newClass="margin-b24">
                  <CardHeader>
                    <CardTitle>{e.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription description={e.text} />
                  </CardContent>
                  <CardFooter />
                </Card>
              ))}
            </div>
          </div>
          <div className="about__content-img">
            <img
              className="about__image"
              src="assets/engineering-team.jpg"
              alt="tiger zambezi engineers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
