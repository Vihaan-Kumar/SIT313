import Header from "./components/Header";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Tutorials from "./components/Tutorials";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div style={{ padding: "2rem" }}>
        <Featured />
        <Tutorials />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
