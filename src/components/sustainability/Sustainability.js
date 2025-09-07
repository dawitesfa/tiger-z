import { sustainabilityItems } from "../../data/Data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../common/Card";
import "./Sustainability.css";

export const Sustainability = ({ children }) => {
  return (
    <section className="section">
      <div className="section__content" id="sustainability">
        <h2 className="section__title">Sustainability</h2>
        <p className="section__description">
          Sustainability is foundational to our growth strategy—balancing
          environmental protection, positive social impact and strong governance
          to create shared value.
        </p>
        <div className="sustainability__cards">
          {sustainabilityItems.map((s) => (
            <Card key={s.title} newClass="margin-b24">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription description={s.text} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
