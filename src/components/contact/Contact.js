import { Input, TextArea } from "../common/Input";
import { Button } from "../common/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../common/Card";
import { ContactDetail } from "../common/Address";

import "./Contact.css";
export const Contact = ({ children }) => {
  return (
    <section className="section">
      <div className="section__content" id="contact">
        <div className="contact__text-content">
          <h2 className="section__title">Contact Us</h2>
          <p className="section__description">
            We’d love to discuss partnerships, supply opportunities and careers.
            Reach out and our team will respond promptly.
          </p>
          <ContactDetail />
          <div className="contact__gmap">
            {/* <Map
              defaultZoom={15}
              defaultCenter={{ lat: -15.41705, lng: 28.30891 }}
            /> */}
            <iframe
              title="HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63832.09099341396!2d28.247!3d-15.416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f6e5a1a4f02d%3A0x9a527f4e9e7c4b8d!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1680000000000"
              width="100%"
              height="280"
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription description="We typically respond within 2 business days." />
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been captured.");
                }}
                className="grid gap-4"
              >
                <Input
                  placeholder="Your name"
                  required
                  className="rounded-xl"
                />
                <Input
                  placeholder="Email address"
                  type="email"
                  required
                  className="rounded-xl"
                />
                <Input placeholder="Subject" required className="rounded-xl" />
                <TextArea
                  placeholder="Your message"
                  rows={6}
                  required
                  className="rounded-xl"
                />
                <Button type="submit" className="margin-t48">
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
