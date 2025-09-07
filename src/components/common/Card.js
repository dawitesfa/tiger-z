import "./Card.css";

export const Card = ({ children, newClass }) => {
  return <div className={`card ${newClass}`}>{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h3 className="card-title">{children}</h3>;
};

export const CardHeader = ({ children }) => {
  return <header className="card-header">{children}</header>;
};

export const CardContent = ({ children }) => {
  return <main className="card-content">{children}</main>;
};

export const CardDescription = ({ description }) => {
  return <p className="card-description">{description}</p>;
};

export const CardFooter = ({ children }) => {
  return <footer className="card-footer"></footer>;
};

export const CardSubTitle = ({ children }) => {
  return <p className="card-subtitle">{children}</p>;
};
