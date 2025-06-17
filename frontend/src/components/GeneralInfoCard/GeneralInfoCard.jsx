import React from "react";
import LabelIcon from "@mui/icons-material/Label";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";


function GeneralInfoCard() {
    return(
        <div style={{ border:"1px solid #eee", width: "40%", height: "490px", borderRadius: "1%"}}>
                <h3 style={{ padding: "10px 24px 0 14px", display: "flex", justifyContent: "space-between" }}>General info</h3>
             

            <div style={{ padding: "20px 24px 0 24px", justifyContent: "space-between" }}>
                <InfoRow icon={<LabelIcon />} label="Lead code" value="#586789963" />
            <InfoRow icon={<LocalOfferIcon />} label="Product" value="Sample Business" />
            <InfoRow icon={<PersonIcon />} label="Client" value="Ms. Kroger" />
            <InfoRow icon={<BusinessIcon />} label="Company" value="AbbVibes" />
            <InfoRow icon={<PhoneIcon />} label="Phone number" value="(123) 456-7891" isLink />
            <InfoRow icon={<EmailIcon />} label="Email" value="main@domain.com" isLink />
            <InfoRow icon={<CreditCardIcon />} label="Payment Method" value="Bank transfer" />
            <InfoRow icon={<AttachMoneyIcon />} label="Currency" value="USD ($)" />
            <InfoRow icon={<AttachMoneyIcon />} label="Budget" value="$2,000" />
            <InfoRow icon={<AttachMoneyIcon />} label="Deposit" value="$0" />
            <InfoRow icon={<PeopleAltIcon />} label="PIC" value={<PICAvatars />} />
            </div>
            
        </div>
    );
}

function InfoRow({ icon, label, value, badge, isLink }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "14px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ color: "#624BFF" }}>{icon}</span>
        <span style={{ color: "#666" }}>{label}</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {badge && (
          <span
            style={{
              backgroundColor: "#f1edff",
              color: "#8c52ff",
              fontSize: "12px",
              padding: "2px 8px",
              borderRadius: "12px",
              fontWeight: "500",
            }}
          >
            {badge}
          </span>
        )}
        <span
          style={{
            fontWeight: 500,
            color: isLink ? "#2e7dff" : "#111",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function PICAvatars() {
  return (
    <div style={{ display: "flex" }}>
      <img
        src="https://i.pravatar.cc/24?img=1"
        alt="avatar1"
        style={{ borderRadius: "50%", marginRight: "-5px" }}
      />
      <img
        src="https://i.pravatar.cc/24?img=2"
        alt="avatar2"
        style={{ borderRadius: "50%", border: "2px solid white" }}
      />
    </div>
  );
}


export default GeneralInfoCard;