import "./about.css";
import Award from "../../img/award.png";
import sudarshanImg from "../../img/sudarshan-img1.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={sudarshanImg}
            alt="myImg"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title" style={{ margin: "0px 0px 10px 0px" }}>
          {/* About Me */}
          Work Experience
        </h2>
        {/* <br /> */}
        <h3 className="a-title">Full Time</h3>
        <p className="a-sub" style={{ margin: "10px 0px 0px 0px" }}>
          Flexinovus Solutions Pvt.Ltd.
        </p>
        <p style={{ fontSize: "smaller" }}>Dec 2022- Present, Delhi</p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
