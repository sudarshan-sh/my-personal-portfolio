import "./product.css";

const colorStyle = {
  color: "darksalmon",
};

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser" style={{ backgroundColor: "#e4b09e" }}>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={img}
          alt=""
          className="p-img"
          style={{ height: "33vh", objectFit: "cover" }}
        />
      </a>
    </div>
  );
};

export default Product;
