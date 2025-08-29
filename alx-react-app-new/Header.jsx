export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#0a3d62",
        color: "#ffffff",
        textAlign: "center",
        padding: "16px 0",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <h1 style={{ margin: 0, letterSpacing: "0.5px" }}>My Favorite Cities</h1>
    </header>
  );
}
