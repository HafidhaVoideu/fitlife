import Header from "./scenes/global/header/Header";
import About from "./scenes/sections/about/About";
import Classes from "./scenes/sections/classes/Classes";
import News from "./scenes/sections/news/News";

import Home from "./scenes/sections/home/Home";
import Footer from "./scenes/global/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className=" overflow-hidden">
        <Home />
        <About />
        <Classes />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
