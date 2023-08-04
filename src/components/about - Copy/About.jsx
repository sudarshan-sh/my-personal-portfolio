import "./about.css";
import Award from "../../img/award.png";
import sudarshanImg from "../../img/sudarshan-img1.jpg";

const About = () => {
  return (
    <div className="a" style={{ padding: "5rem 3rem", gap: "10rem" }}>
      {/* <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={sudarshanImg} alt="myImg" className="a-img" />
        </div>
      </div> */}

      {/* LEFT */}
      <div className="a-left">
        <h2
          className="a-title"
          style={{ margin: "0px 0px 10px 0px", fontWeight: "600" }}
        >
          {/* About Me */}
          WORK EXPERIENCE
        </h2>
        {/* <br /> */}
        <h3 className="a-title" style={{ fontWeight: "600" }}>
          Full Time
        </h3>
        <p
          className="a-sub"
          style={{ margin: "10px 0px 0px 0px", fontWeight: "600" }}
        >
          Flexinovus Solutions Pvt.Ltd.
        </p>
        <p style={{ fontSize: "smaller" }}>Dec 2022- Present, Delhi</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem 0rem",
          }}
        >
          <p
            // className="a-sub"
            style={{ fontWeight: "600" }}
          >
            FlexiOMS(Saas product)
          </p>
          <ul>
            <li className="project-office">
              SaaS based Order Management System(OMS) and Order Fulfillment
              Platform build on ReactJS(Frontend) & Java(Backend) consists of
              features like B2B & B2C orders, Inventory Visibility, Manage
              Fulfillment, Purchase & Transfer Orders, etc
            </li>
            <li className="project-office">
              Integrated the product with external systems (channels and
              logistics partner L.P) such as Shopify, Myntra(channel) and
              Shiprocket(L.P)
            </li>
            <li className="project-office">
              Fetching orders, inventory and catalog/items from Shopify into our
              system using their outbound APIs.
            </li>
            <li className="project-office">
              Posting orders/forward shipments and reverse shipments into
              Shiprocket panel from flexiOMS using their Forward Wrapper &
              Reverse Wrapper API respectively.
            </li>
            <li className="project-office">
              After posting the order, AWB no. gets generated along with pickup
              scheduled date and shipping charges (both in forward & reverse
              shipments).
            </li>
          </ul>

          <p
            // className="a-sub"
            style={{ fontWeight: "600" }}
          >
            IBM Sterling Multi-Channel Fulfillment Solution (SMCFS)
          </p>
          <ul>
            <li className="project-office">
              Created order fulfillment and shipment pipeline in IBM
              Applications Manager which depicts how an order moves from one
              status to another through diff erent transactions like Create
              Order, Schedule Order, Release Order, Ship Shipment, Shipped, etc.
            </li>
            <li className="project-office">
              Followed the OMS order fulfillment process such as- DOM
              (Distributed Order Management) to manage, monitor, and configure
              orders from one node (warehouse/store/distribution centers) to
              another, etc.
            </li>
            <li className="project-office">
              Worked on AngularJS, XML & XSL Transformations.
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="a-right"
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <div>
          <h2
            className="a-title"
            style={{ margin: "0px 0px 10px 0px", fontWeight: "600" }}
          >
            {/* About Me */}
            EXPERIENCE
          </h2>
          <h3 className="a-title" style={{ fontWeight: "600" }}>
            Full Time
          </h3>
          <ul>
            <li className="project-office">
              Flexinovus Solutions Pvt.Ltd.- 9 months
            </li>
          </ul>
          <br />
          <h3 className="a-title" style={{ fontWeight: "600" }}>
            Internships
          </h3>
          <ul>
            <li className="project-office">
              Flexinovus Solutions Pvt.Ltd.- 6 months
            </li>
            <li className="project-office">Appic Softwares- 2 months</li>
            <li className="project-office">ResoluteAI.in- 1 month</li>
          </ul>
        </div>
        {/* +++++++++++++++++++++++++ */}

        <div>
          <h2
            className="a-title"
            style={{ margin: "0px 0px 10px 0px", fontWeight: "600" }}
          >
            {/* About Me */}
            SKILLS
          </h2>
          {/* <br /> */}
          <h3 className="a-title" style={{ fontWeight: "600" }}>
            Language/Libraries/Tools
          </h3>
          <ul>
            <li className="project-office">Javascript</li>
            <li className="project-office">React JS</li>
            <li className="project-office">Redux</li>
            <li className="project-office">Typescript</li>
            <li className="project-office">Angular</li>
            <li className="project-office">Material UI (MUI)</li>
            <li className="project-office">Tailwind CSS</li>
            <li className="project-office">HTML5</li>
            <li className="project-office">CSS3</li>
            <li className="project-office">Git/Github</li>
            <li className="project-office">Jenkins</li>
          </ul>
        </div>
        {/* <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p> */}
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
