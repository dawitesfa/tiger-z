import { ExternalLink } from "lucide-react";
import { Button } from "../common/Button";

import { jobs } from "../../data/Data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../common/Card";
import "./Careers.css";
export const Careers = ({ children }) => {
  return (
    <section className="section staggered">
      <div className="section__content" id="careers">
        <div className="careers__title-row">
          <h2 className="section__title">Careers</h2>
          <a className="send-cv" href="#home" target="_blank">
            Send your CV{" "}
            <span>
              <ExternalLink size={14} />
            </span>
          </a>
        </div>
        <p className="section__description">
          Join a growth‑minded, values‑driven team building resilient resource
          and trade ecosystems across the region.
        </p>
        <div className="careers__cards">
          {jobs.map((j) => (
            <Card key={j.title} newClass="margin-b24">
              <CardHeader>
                <CardTitle>{j.title}</CardTitle>
                <CardSubTitle>{`${j.location} • ${j.type}`}</CardSubTitle>
              </CardHeader>
              <CardContent>
                <CardDescription description={j.summary} />
              </CardContent>
              <Button className="margin-t48">Apply</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
