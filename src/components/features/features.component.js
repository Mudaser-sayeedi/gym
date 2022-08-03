import "./features.component.scss";

function Features({ children, title, subTitle }) {
  return (
    <div className="featureContainer">
      {children}
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}

export default Features;
