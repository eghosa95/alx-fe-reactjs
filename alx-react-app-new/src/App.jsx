import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}
