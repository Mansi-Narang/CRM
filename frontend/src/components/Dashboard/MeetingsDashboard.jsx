import React from "react";
import {
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const meetings = [
  {
    title: "Internal preparation meeting",
    time: "08:00 - 09:00 AM",
    participants: ["/avatar1.png", "/avatar2.png", "/avatar3.png", "/avatar4.png"],
    status: "In 10 mins",
    statusColor: "#DC2626", // red-600
    statusBgColor: "#FEE2E2", // red-100
    bgColor: "#EEF2FF", // indigo-50
  },
  {
    title: "Internal preparation meeting",
    time: "03:00 - 04:00 PM",
    participants: ["/avatar2.png", "/avatar3.png", "/avatar4.png"],
    bgColor: "#FFE4E6", // rose-100
  },
  {
    title: "External meeting - Negotiation",
    time: "04:00 - 05:00 PM",
    participants: ["/avatar1.png", "/avatar2.png", "/avatar3.png", "/more.png"],
    bgColor: "#D1FAE5", // emerald-100
  },
];

const MeetingCard = ({ meeting }) => (
  <Card
    className="w-full mb-4 rounded-2xl shadow-none"
    style={{ backgroundColor: meeting.bgColor }}
  >
    <CardContent className="flex flex-col gap-2 p-4">
      {meeting.status && (
        <Chip
          label={meeting.status}
          size="small"
          style={{
            backgroundColor: meeting.statusBgColor,
            color: meeting.statusColor,
            fontWeight: 500,
            fontSize: "12px",
            padding: "0 8px",
            height: "24px",
            borderRadius: "6px",
            width: "fit-content",
          }}
        />
      )}
      <div className="flex justify-between items-stretch">
        <div>
          <Typography
            variant="subtitle1"
            className="font-bold text-sm md:text-base"
          >
            {meeting.title}
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-600 text-xs md:text-sm"
          >
            {meeting.time}
          </Typography>
        </div>
        <AvatarGroup max={4} className="-space-x-2">
          {meeting.participants.map((avatar, index) => (
            <Avatar key={index} alt="" src={avatar} style={{ width: 32, height: 32 }} />
          ))}
        </AvatarGroup>
      </div>
    </CardContent>
  </Card>
);

const MeetingsDashboard = () => {
  return (
    <div className="p-6 bg-white h-fit mb-8 rounded-xl shadow-sm">
      <div className="mb-6 font-bold text-lg md:text-xl">
        4 meetings today
      </div>
      {meetings.map((meeting, idx) => (
        <MeetingCard key={idx} meeting={meeting} />
      ))}
    </div>
  );
};

export default MeetingsDashboard;
