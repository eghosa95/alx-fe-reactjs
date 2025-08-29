export default function UserProfile(props) {
  const cardStyle = {
    border: "1px solid gray",
    padding: "10px",   
    margin: "10px",    
    borderRadius: 12,
    background: "#ffffff",
    maxWidth: 420,
  };


  const nameStyle = {
    color: "blue",
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
