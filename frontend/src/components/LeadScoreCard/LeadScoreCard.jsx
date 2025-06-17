import React from "react";

function LeadScoreCard() {
  return (
    <div style={styles.card}>
      {/* Title Row */}
      <div style={styles.header}>
        <h3 style={styles.title}>Lead score</h3>
        <span style={styles.link}>View detail</span>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        {/* Left: Donut chart + Score */}
        <div style={styles.chartSection}>
          <div style={styles.donut}>
            <div style={styles.innerCircle}></div>
          </div>
          <div style={{ marginTop: "10px", color: "#00c851", fontWeight: "bold" }}>
            ↑ 80%
          </div>
        </div>

        {/* Right: Criteria List */}
        <div style={styles.criteriaSection}>
          {[
            "Country/Region is UK",
            "Job title is Manager",
            "Returing Opp",
            "Est. close date is < 10 days",
            "Accept Demo meeting",
          ].map((text, idx) => {
            const isNegative = text.includes("Est. close date");
            return (
              <div key={idx} style={styles.criteriaRow}>
                <span style={{ color: isNegative ? "red" : "green", marginRight: 8 }}>
                  {isNegative ? "✗" : "✓"}
                </span>
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #eee",
    width: "50%",
    boxSizing: "border-box",
    height: "320px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    margin: 0,
  },
  link: {
    color: "#8b5cf6",
    fontSize: "14px",
    cursor: "pointer",
  },
  content: {
    display: "flex",
  },
  chartSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  donut: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "8px solid #00c851",
    borderTopColor: "#e5e5e5",
    transform: "rotate(45deg)",
    position: "relative",
  },
  innerCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    transform: "translate(-50%, -50%)",
  },
  criteriaSection: {
    flex: 2,
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  criteriaRow: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
};

export default LeadScoreCard;
