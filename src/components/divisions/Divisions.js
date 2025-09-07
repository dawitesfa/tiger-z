import { motion } from "framer-motion";
import { divisions } from "../../data/Data";
import { Button } from "../common/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../common/Card";
import "./Divisions.css";

export const Divisions = ({ children }) => {
  return (
    <section className="section staggered">
      <div className="section__content" id="divisions">
        <h2 className="section__title">Divisions</h2>
        <div className="divisions__cards">
          {divisions.map((d, i) => (
            <div
              key={d.key}
              id={d.key}
              className={`div-flex-container ${
                i % 2 !== 0 ? "row-reverse" : ""
              }`}
            >
              <motion.div
                // initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6 }}
                className="div-card"
              >
                <Card newClass="no-bottom-rad">
                  <CardHeader>
                    <CardTitle>
                      <div className="card-title--children">
                        <div>
                          <d.icon color={d.color} />
                        </div>
                        {d.name}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription description={d.blurb} />
                    <ul className="divisions__points">
                      {d.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <Button>Learn More →</Button>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="div-img"
                style={{ backgroundImage: `url(assets/${d.key}.jpg)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
