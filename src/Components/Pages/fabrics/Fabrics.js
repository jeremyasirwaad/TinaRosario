import React from "react";
import "./Fabrics.css";

import { Carousel } from "3d-react-carousal";

export const Fabrics = () => {
  let slides = [
    <img
      className="caroimg"
      src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20743.png?alt=media&token=5b57f99b-f4e6-4c70-8654-6e1062d33ae2"
      alt="1"
    />,
    <img
      className="caroimg"
      src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20745.png?alt=media&token=f29b4a8b-8fe0-4cfb-acc2-c34f4643c429"
      alt="5"
    />,
    <img
      className="caroimg"
      src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20746.png?alt=media&token=c2b80a6a-6730-46df-812c-4600f7d23e53"
      alt="2"
    />,
    <img
      className="caroimg"
      src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20747.png?alt=media&token=5cac343d-1540-498f-9e93-cf76df26318e"
      alt="3"
    />,
    <img
      className="caroimg"
      src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20750.png?alt=media&token=075f3835-10f2-4132-b59f-9fe04ba6d945"
      alt="4"
    />,
    <img
      className="caroimg"
      src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20748.png?alt=media&token=10d0c17d-69b7-485a-a3ef-9f2db1204ba9"
      alt="5"
    />,
    <img
      className="caroimg"
      src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20749.png?alt=media&token=a150d658-38af-40ad-811c-8b442cfafa43"
      alt="5"
    />,
  ];

  return (
    <div>
      <div className="bgFabrics">
        <span className="fabricsheader">Know your Fabric</span>
        <div className="fabricscaro">
          <Carousel style={{ width: "98%" }} slides={slides} autoplay={true} interval={5000} />
        </div>
        <span className="fabricsheader2">Why use sustainable eco-friendly fabric?</span>
        <div className="textcontainer">
          <ul>
            <li style={{ textAlign: "left" }}>
              Did you ever know that textile production contributes to around 20% of the world's water pollution?
            </li>
            <li style={{ textAlign: "left" }}>Do you feel inclined to play a small meaningful part?</li>
          </ul>

          <p style={{ textAlign: "left" }}>
            The concept of sustainable fabrics might then appeal to you. Throughout the lifecycle of design, making and
            any subsequent use, they cause little harm to our mother planet. They are versatile, user-friendly,
            charming, and durable.
          </p>
        </div>
        {/* <span style={{ marginTop: "70px", color: "#270641" }} id="services" className="landser">
          Fabric
        </span> */}
        {/* <button className="fabbutton">Fabrics</button> */}
        <div className="imgfabrows">
          <div className="imgfabrow1">
            <span
              className="reshead1"
              style={{
                fontWeight: "600",
                fontSize: "35px",
              }}
            >
              Cotton <p className="small">“Feel Easy and comfortable”</p>
            </span>
            <img
              alt=""
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2078%20(1).png?alt=media&token=2b60237f-e067-4537-ba33-aa13dfcf41ab"
              }
            />
            <div className="imgfabrowinner">
              <span
                className="reshead2"
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Cotton - “Feel Easy and comfortable”
              </span>
              <p style={{ marginTop: "15px" }}>
                This plant based fiber is soft, fresh and has high draping abilities. Cotton is an incredibly suitable
                choice for summer dresses. It comes in various forms - Kaftans, frocks, timeless kurtas, simple shirts
                and the list goes on. An easy to care product, it provides a premium feel at attractive prices. People
                have used it for centuries; It’s time-tested!
              </p>
            </div>
          </div>
          <div className="imgfabrow2">
            <span
              className="reshead1"
              style={{
                fontWeight: "600",
                fontSize: "35px",
              }}
            >
              Jute <p className="small">“The golden fiber”</p>
            </span>
            <img
              alt=""
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2078.png?alt=media&token=2838a4be-18b4-4906-a936-49164f4e95ce"
              }
            />
            <div className="imgfabrowinner">
              <span
                className="reshead2"
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Jute - “The golden fiber”
              </span>
              <p style={{ marginTop: "15px" }}>
                Jute is easy to work with fabric. Extremely affordable, they do not need fertilizers or pesticides to
                grow. Their high tenacity enables rough use. It is usually blended with other fabrics such as rayon or
                nylon for a soft & shiny feel. One could start styling hats, wraps, throws and sweaters. Well-knit jute
                cardigans and cowls provide a special grace. It comes with a lifelong hand wash warranty!
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <span
              className="reshead1"
              style={{
                fontWeight: "600",
                fontSize: "35px",
              }}
            >
              Khadi <p className="small">“Strings of freedom”</p>
            </span>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2036.png?alt=media&token=1c9c018a-4177-40a1-a543-c0246b95b0fd"
              }
              alt=""
            />
            <div className="imgfabrowinner">
              <span
                className="reshead2"
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Khadi - “Strings of freedom”
              </span>
              <p style={{ marginTop: "15px" }}>
                The hand-spun threads of austerity and quality are deeply connected with the spirit of Indian freedom.
                These interlaced fiber threads come in various textures and thickness. Shirts and dhotis adorn men;
                kurtas and elegant salwars crown women. Considered an all season fabric, keeps you warm in winter and
                cool in summer.They get enhanced with every wash!
              </p>
            </div>
          </div>

          <div className="imgfabrow2">
            <span
              className="reshead1"
              style={{
                fontWeight: "600",
                fontSize: "35px",
              }}
            >
              Linen <p className="small">“Get royal with lavish linen”</p>
            </span>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2077.png?alt=media&token=f2cad193-b654-408b-876c-542db4180246"
              }
              alt=""
            />
            <div className="imgfabrowinner">
              <span
                className="reshead2"
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Linen - “Get royal with lavish linen”
              </span>
              <p style={{ marginTop: "15px" }}>
                Linen is a naturally moth resistant and biodegradable fabric. They have a lower thread count and are
                less-likely to trap dust particles from the environment. The inherent white color reflects heat-inducing
                solar rays. Considered luxury, it gets softer after each wash and can last up to 30 years. An extensive
                array lines up - blazers, jackets, formal pants and blouses, trendy jumpsuits, and other designer
                silhouettes.They dry quickly and a simple wash gives back the fresh look. It’s often referred to as the
                ROYAL LINEN!
              </p>
            </div>
          </div>
        </div>
        {/* <button className="fabbutton" style={{ marginTop: "80px" }}>
          Patterns
        </button> */}
        <span style={{ marginTop: "70px", color: "#270641" }} id="services" className="landser">
          Patterns
        </span>
        <div className="imgfabrows" style={{ marginBottom: "90px" }}>
          <div className="imgfabrow2">
            <span
              className="reshead1"
              style={{
                fontWeight: "600",
                fontSize: "35px",
              }}
            >
              Ikat <p className="small">“A delicate mix”</p>
            </span>
            <img
              alt=""
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2078%20(2).png?alt=media&token=7a9a6056-c8f0-4311-8db6-b81c4e819ec2"
              }
            />
            <div className="imgfabrowinner">
              <span
                className="reshead2"
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Ikat - “A delicate mix”
              </span>
              <p style={{ marginTop: "15px" }}>
                The name denotes both the fabric and the pattern. Ikat, meaning “tie,” is an ancient loom-woven fabric
                made by weaving both cotton and silk in a complex traditional manner. Its unique vertical symmetry and
                geometric motifs lend to many natural patterns - chevron, diamond, stripes & checks. Many parts of India
                have their indigenous ikat weaving techniques. Orissa’s Sambalpuri Ikat is quite different from the
                sharp ikat patterns woven in Patan of Gujarat. The latter, known as Patan Patola, is one of the rarest
                forms of double Ikat, which takes a lot of time and effort in dyeing and weaving. A different form of
                Patola ikat is made in Rajkot, Gujarat. Telia Rumal made in Andhra, Pasapalli from Odisha, and Puttapaka
                from Telangana are other Indian Ikats. It is colored using natural dyes. Easy to maintain, they make
                good choices for trendy maxi skirts, fancy jumpsuits, or timeless blouses.
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <span
              className="reshead1"
              style={{
                fontWeight: "600",
                fontSize: "35px",
              }}
            >
              Kalamkari <p className="small">“Subtle art of pen”</p>
            </span>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2077%20(1).png?alt=media&token=4f0b6805-eb6f-4186-be9d-ddefd90d1284"
              }
              alt=""
            />
            <div className="imgfabrowinner">
              <span
                className="reshead2"
                style={{
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Kalamkari - “Subtle art of pen”
              </span>
              <p style={{ marginTop: "15px" }}>
                Even art historians do not know exactly when Kalamkari began, however it is believed to have originated
                in the modern-day states of Andhra Pradesh and Telangana several hundred years ago. Deriving its name
                from the word ‘kalam,’ which means pen, ‘Kalamkari’ refers to a particular, intricate style of
                hand-painting onto cloth.A twenty three stepped making process, Kalamkari is an exclusive piece of
                fabric that depicts history. It is just not the ancient making process, but the scenes from mythological
                epics and sacred texts add depth. Natural dyes are used to make this intricate art that requires
                meticulous detailing. Silk and cotton are the often used fabrics. These clothes contain a special odor
                in them, as the complete process involves the usage of buffalo milk. Generally, used in the form of
                elegant sarees, they can also be designed into tops or kurtas. Kalamkari Dupattas have been a recent
                trend for its luscious glamor and remarkable sophistication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
