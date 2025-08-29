import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

export default function App() {
  const appStyle = {
    background: "#f3f4f6",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={appStyle}>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}
