import UserProfile from "./UserProfile";

export default function MainContent() {
  const containerStyle = {
    maxWidth: 960,
    margin: "24px auto",
    padding: "0 16px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
    alignItems: "stretch",
  };

  const titleStyle = {
    fontSize: 18,
    margin: "0 0 12px 0",
    color: "#111827",
  };

  const infoStyle = {
    background: "#f9fafb",
    border: "1px dashed #e5e7eb",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    color: "#4b5563",
  };

  return (
    <main style={containerStyle}>
      <div style={infoStyle}>
        <p style={titleStyle}>
          Explore user profiles with inline-styled React components.
        </p>
        <p style={{ margin: 0 }}>
          Try tweaking the colors, spacing, and borders directly in the{" "}
          <code>style</code> props to see instant changes.
        </p>
      </div>

      <div style={gridStyle}>
        <UserProfile
          name="Alice"
          age="25"
          bio="Loves hiking and photography. Based in Toronto."
        />
        <UserProfile
          name="Bola"
          age="29"
          bio="Foodie and travel vlogger. Collects vintage film cameras."
        />
        <UserProfile
          name="Chen"
          age="31"
          bio="Frontend dev who enjoys CSS art and coffee tasting."
        />
      </div>
      <p style={textStyle}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}
