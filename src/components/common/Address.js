import { MapPin, Phone, Mail } from "lucide-react";
import "./Address.css";
export const ContactDetail = ({ newClass }) => {
  return (
    <div className={`address ${newClass}`}>
      <p className="contact__details">
        <span>
          <MapPin size={14} color="#e67700" />
        </span>
        &nbsp; &nbsp;
        <span>Plot no. Villa 21, Millennium Village , Lusaka</span>
      </p>
      <p className="contact__details">
        <span>
          <Phone size={14} color="#e67700" />
        </span>
        &nbsp; &nbsp;
        <span>+260955374523/ +260973150037</span>
      </p>
      <p className="contact__details">
        <span>
          <Mail size={14} color="#e67700" />
        </span>
        &nbsp; &nbsp;
        <span>tigerzambezi@gmail.com</span>
      </p>
    </div>
  );
};
