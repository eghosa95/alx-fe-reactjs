export default function Footer() {
  const footerStyle = {
    backgroundColor: "#0b2239",
    color: "#e5e7eb",
    textAlign: "center",
    padding: "16px",
    marginTop: 24,
    borderTop: "1px solid rgba(255,255,255,0.08)",
  };

  const smallStyle = { display: "block", opacity: 0.85, marginTop: 6 };

  return (
    <footer style={footerStyle}>
      <div>© {new Date().getFullYear()} alx-fe-reactjs</div>
      <small style={smallStyle}>Built with inline CSS in React</small>
    </footer>
  );
}
