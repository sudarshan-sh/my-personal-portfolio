import "./about.css";
import Award from "../../img/award.png";
import sudarshanImg from "../../img/sudarshan-img1.jpg";

const colorStyle = {
  color: "darksalmon",
};

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={sudarshanImg}
            alt=""
            className="a-img"
            style={{ width: "80%", borderRadius: "30px" }}
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title" style={colorStyle}>
          ABOUT ME
        </h1>
        <p className="a-sub">
          An ardent Frontend/UI Developer domiciled in Jaipur, Rajasthan,
          India.📍
        </p>
        <p className="a-desc">
          My proficiencies encompass a wide-ranging and comprehensive set of
          skills in HTML, CSS, JavaScript, React, Redux, Material UI (MUI),
          Tailwind, MySQL and Java Spring boot.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
