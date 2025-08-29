/* Receives props: name, age, bio */
export default function UserProfile(props) {
  const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    margin: 12,
    maxWidth: 420,
    background: "#ffffff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  };

  const nameStyle = {
    color: "#1d4ed8",
    fontSize: 22,
    margin: "0 0 8px 0",
  };

  const rowStyle = { margin: "4px 0", lineHeight: 1.5, color: "#374151" };

  const ageBadgeStyle = {
    fontWeight: "bold",
    background: "#eef2ff",
    padding: "2px 8px",
    borderRadius: 999,
    marginLeft: 6,
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p style={rowStyle}>
        Age:
        <span style={ageBadgeStyle}>{props.age}</span>
      </p>
      <p style={{ ...rowStyle, marginTop: 8 }}>{props.bio}</p>
    </div>
  );
}
