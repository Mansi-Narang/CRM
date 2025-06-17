import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LeadScoreCard from "../LeadScoreCard/LeadScoreCard";

function UpcomingActivitiesCard() {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#fff",
        width: "50%",
        height: "320px"
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ margin: 0 }}>Upcoming activities</h3>
        <span style={{ color: "#624BFF", fontSize: "14px", cursor: "pointer" }}>
          View more
        </span>
      </div>

      {/* Activity 1 */}
      <ActivityItem
        dateLabel="Today"
        bgColor="#f4eeff"
        badgeColor="#a678ff"
        title="Internal preparation meeting"
        time="08:00 - 09:00 AM"
        avatars={["1", "2", "3", "4"]}
      />

      {/* Activity 2 */}
      <ActivityItem
        dateLabel="Sep 30, 2022"
        bgColor="#e9fdf5"
        badgeColor="#00c387"
        title="External meeting - Negotiation"
        time="08:00 - 09:00 AM"
        avatars={["5", "6", "7", "8"]}
      />
    </div>
  );
}

function ActivityItem({ dateLabel, bgColor, badgeColor, title, time, avatars }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: "10px",
        padding: "14px 16px",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "12px",
              backgroundColor: badgeColor,
              color: "#fff",
              padding: "2px 10px",
              borderRadius: "12px",
              fontWeight: 500,
            }}
          >
            {dateLabel}
          </span>
          <h4 style={{ margin: "8px 0 4px 0", fontSize: "15px" }}>{title}</h4>
          <div
            style={{ display: "flex", alignItems: "center", color: "#666", fontSize: "13px" }}
          >
            <AccessTimeIcon style={{ fontSize: "14px", marginRight: "4px" }} />
            {time}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex" }}>
            {avatars.map((id, index) => (
              <img
                key={index}
                src={`https://i.pravatar.cc/24?img=${id}`}
                alt="avatar"
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  marginLeft: index !== 0 ? "-6px" : "0",
                  border: "2px solid #fff",
                }}
              />
            ))}
          </div>
          <MoreVertIcon fontSize="small" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}


export default UpcomingActivitiesCard;
