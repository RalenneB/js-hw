// import logo from './logo.svg';
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingContainer from "./components/LandingContainer";
import ServicesContainer from "./components/ServicesContainer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingContainer></LandingContainer>
      <ServicesContainer></ServicesContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
