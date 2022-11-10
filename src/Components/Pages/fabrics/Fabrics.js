import React from "react";
import "./Fabrics.css";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import ikat from "./ikat.svg";
import kala from "./kala.svg";
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

  const callback = function (index) {};
  return (
    <div>
      <div className="bgFabrics">
        <span className="fabricsheader">Know your Fabric</span>
        <div className="fabricscaro">
          <Carousel style={{ width: "98%" }} slides={slides} autoplay={true} interval={5000} onSlideChange={callback} />
        </div>
        <span className="fabricsheader2">Why use sustainable eco friendly Fabric?</span>
        <div className="textcontainer">
          <p>Did you ever know that textile production contributes to around 20% of the world's water pollution? </p>
          <p>Do you feel inclined to play a small meaningful part?</p>
          <p>
            The concept of sustainable fabrics might then appeal to you. Throughout the lifecycle of design, making and
            any subsequent use, they cause little harm to mother planet. They are versatile, user-friendly, charming and
            durable.
          </p>
        </div>
        <span style={{ marginTop: "20px", color: "#270641" }} id="services" className="landser">
          Fabric
        </span>
        {/* <button className="fabbutton">Fabrics</button> */}
        <div className="imgfabrows">
          <div className="imgfabrow1">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2036.png?alt=media&token=1c9c018a-4177-40a1-a543-c0246b95b0fd"
              }
              alt=""
            />
            <div className="imgfabrowinner">
              <span>Khadi</span>
              <p>
                <ul>
                  <li>Strings of freedom</li>
                  <li>The fabric that wove the Indian Freedom</li>
                  <li>Life by the charkha</li>
                </ul>
                The hand-spun threads of austerity and quality are deeply connected with the spirit of Indian freedom.
                These interlaced fiber threads come in various textures and thickness. Shirts and dhotis adorn men;
                kurtas and elegant salwars crown women.
                <br />
                Considered an all season fabric, they keep you warm in winter and cool in summer. They get enhanced with
                every wash!
              </p>
            </div>
          </div>
          <div className="imgfabrow2">
            <img
              alt=""
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2078.png?alt=media&token=3c36cfe7-1680-48e5-8e7f-4f6571a4224a"
              }
            />
            <div className="imgfabrowinner">
              <span>Cotton</span>
              <p>
                <ul style={{ alignContent: "flex-end", alignSelf: "flex-end", alignItems: "flex-end" }}>
                  <li>All round comfy cotton</li>
                  <li>Get easy with the comfy </li>
                </ul>
                This plant based fiber is soft, fresh and has high draping abilities. Cotton is especially a suitable
                choice for summer dresses. It comes in various forms - Kaftans, frocks, timeless kurtas, simple shirts
                and the list goes on.
                <br />
                An easy to care product, it provides a premium feel at attractive prices. People have used it for
                centuries; It’s time-tested!
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2077.png?alt=media&token=f2cad193-b654-408b-876c-542db4180246"
              }
              alt=""
            />
            <div className="imgfabrowinner">
              <span>Linen</span>
              <p>
                <ul>
                  <li>Get all lush with lavish linen</li>
                </ul>
                Linen is a naturally moth resistant and biodegradable fabric. They have a lower thread count and
                less-likely to trap dust particles from the environment. The inherent white color reflects heat-inducing
                solar rays.
                <br />
                Considered luxury, it gets softer after each wash and can last up to 30 years. An extensive array lines
                up - blazers, jackets, formal pants and blouses, trendy jumpsuits and other designer silhouettes.
                <br />
                They dry quickly and a simple wash gives back the fresh look. It’s often referred to as the royal linen!
              </p>
            </div>
          </div>
          <div className="imgfabrow2">
            <img alt="" src={img1} />
            <div className="imgfabrowinner">
              <span>Jute</span>
              <p>
                <ul>
                  <li>The golden fiber</li>
                </ul>
                Jute is an easy to work with fabric. Extremely affordable, they do not need fertilizers or pesticides to
                grow.
                <br />
                Their high tenacity enables rough use. It is usually blended with other fabrics (such as rayon or nylon)
                for a soft & shiny feel.
                <br />
                One could start styling hats, wraps, throws and sweaters. Well-knit jute cardigans and cowls provide a
                special grace.
                <br />
                It comes with a lifelong hand wash warranty!
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <img src={img1} alt="" />
            <div className="imgfabrowinner">
              <span>Banana Silk</span>
              <p>
                <ul>
                  <li>A whirlwind of innovation</li>
                </ul>
                A rare and exotic textile product made from the stems and stalks of the banana plant. Natural shine is
                its uniqueness. It is a durable and versatile fabric. Competitive pricing has helped gaining greater
                attention recently.
                <br />
                Many designers and fashion icons opt due to its softness and elasticity. They can easily be made into a
                saree or stitched into graceful gowns.
                <br />
                It is silk-like but sustainable!
              </p>
            </div>
          </div>
        </div>
        {/* <button className="fabbutton" style={{ marginTop: "80px" }}>
          Patterns
        </button> */}
        <span style={{ marginTop: "20px", color: "#270641" }} id="services" className="landser">
          Patterns
        </span>
        <div className="imgfabrows" style={{ marginBottom: "90px" }}>
          <div className="imgfabrow2">
            <img
              alt=""
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2078%20(1).png?alt=media&token=132f5c86-e902-4259-beba-aaed80f87f91"
              }
            />
            <div className="imgfabrowinner">
              <span>Ikat</span>
              <p>
                <ul>
                  <li>A delicate mix</li>
                </ul>
                The name denotes both the fabric and the pattern. Ikat meaning “tie” is an ancient, loom-woven, fabric
                made by weaving both cotton and silk in a complex traditional manner. It’s unique vertical symmetry and
                geometric motifs lends to many natural patterns - chevron, diamond, stripes & checks.
                <br />
                Many parts of India have their indigenous ikat weaving techniques. Orissa’s Sambalpuri Ikat is quite
                different from the sharp ikat patterns woven in Patan of Gujarat. The latter, known as Patan Patola, is
                one of the rarest forms of double Ikat, which takes a lot of time and effort in dyeing and weaving. A
                different form of Patola ikat is made in Rajkot, Gujarat. Telia Rumal made in Andhra, Pasapalli from
                Odisha and Puttapaka from Telangana are other Indian Ikats. Ikat is colored using natural dyes.
                <br />
                Easy to maintain, they make good choices for trendy maxi skirts, fancy jumpsuits or timeless blouses.
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2077%20(1).png?alt=media&token=4f0b6805-eb6f-4186-be9d-ddefd90d1284"
              }
              alt=""
            />
            <div className="imgfabrowinner">
              <span>Kalamkari</span>
              <p>
                <ul>
                  <li>Subtle art of pen</li>
                </ul>
                Even art historians do not know exactly when Kalamkari began, however it is believed that it originated
                in the modern-day states of Andhra Pradesh and Telangana several hundred years ago. Deriving its name
                from the word ‘kalam,’ which means pen, ‘Kalamkari’ refers to a particular, intricate style of
                hand-painting onto cloth.A twenty three stepped making process, kalamkari is an exclusive piece of
                fabric that depicts history. It is just not the ancient making process but the scenes from mythological
                epics and sacred texts add depth. Natural dyes are used to make this intricate art that requires
                meticulous detailing. Silk and cotton are the often used fabrics.
                <br />
                These clothes contain a special odor in them as the complete process involves the usage of buffalo milk.
                Generally, used in the form of elegant sarees, they can also be designed into tops or kurtas. Kalamkari
                Dupattas have been a recent trend for its luscious glamor and remarkable sophistication.
              </p>
            </div>
        </div>
          <div className="imgfabrow2">
            <img src={kala} alt="" />
            <div className="imgfabrowinner">
              <span>Tanjore Painting :</span>
              <p>
                History on our sleeve A 16th century art that has vivid paintings crafted on wooden planks. In the past
                few years, creative minds have started embedding the same pictures on fabrics stealing the spotlight.
                Their intricacy makes the attire look artsy. The precise incorporation of stones in an iconic
                composition along with the glittering gold has gained worldwide attention.
                <br />
                Embellishing these designs on silk sarees weaves (quite literally) the cultural ethos of history into
                the modern times.
                <br />
                Wear a Tanjore painting fabric and walk down the path of history, just like a queen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
