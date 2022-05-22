import "./App.css";
import "./assets/fonts.css";
import HeroSection from "./components/HeroSection";
function App() {
  /*<p>{process.env.REACT_APP_OPENAI_API_KEY}</p>*/
  return (
    <div>
      <HeroSection />
    </div>
  );
}

export default App;
