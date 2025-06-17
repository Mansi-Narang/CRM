import React, { useState } from "react";

function TabSection() {

    const [activeTab, setActiveTab] = useState("Summary");
    
    const tabs = ["Summary", "Talk list", "Deal analysis", "Related", "Active log"];

    return(
        <div style={{ borderBottom: "1px solid #e0e0e0", padding: "0 20px", backgroundColor: "#fff" }}>
            <div style={{ display: "flex", gap: "20px" }}>
                {tabs.map((tab) => (
                    <div key={tab} onClick={() => setActiveTab(tab)}
                    style={{
                    padding: "16px 0",
                    cursor: "pointer",
                    color: activeTab === tab ? "#3f51b5" : "#888",
                    fontWeight: activeTab === tab ? "600" : "500",
                    borderBottom: activeTab === tab ? "2px solid #3f51b5" : "2px solid transparent",
                    transition: "all 0.2s ease-in-out",
                    }}
                    >
                        {tab}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TabSection;