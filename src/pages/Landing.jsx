import Nav from "../components/Nav";
import Header from "../Hoc/Landing/Header";
import Create from "../Hoc/Landing/Create";
import All from "../Hoc/Landing/All";
import Footer from "../components/Footer";
import Track from "../Hoc/Landing/Track";
import Grow from "../Hoc/Landing/Grow";
function Landing() {
  return (
    <div>
      <Nav />
      <Header />
      <Create />
      <Track />
      <Grow />
      <All />
      <Footer />
    </div>
  );
}

export default Landing;
