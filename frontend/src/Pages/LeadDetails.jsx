import Sidebar from "../components/Sidebar/Sidebar"
import TopBar from "../components/TopBar/TopBar";
import LeadStageStepper from "../components/LeadStageStepper/LeadStageStepper";
import LeadInfoCard from "../components/LeadInfoCard/LeadInfoCard";
import TabSection from "../components/TabsSection/TabSection";
import GeneralInfoCard from "../components/GeneralInfoCard/GeneralInfoCard";
import UpcomingActivitiesCard from "../components/UpcomingActivitiesCard/UpcomingActivitiesCard";
import LeadScoreCard from "../components/LeadScoreCard/LeadScoreCard";

function LeadDetails() {
    return(
         <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "250px"}}>
        <Sidebar />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{gap : "24px", padding: "24px"}}>
        <TopBar />
        <LeadStageStepper />
        <br />
        <LeadInfoCard />
        <br />
        <TabSection />
        </div>

       
  
        <div style={{ display:"flex", gap: "24px", padding: "24px" }}>
            <GeneralInfoCard />
            <UpcomingActivitiesCard />
            <LeadScoreCard />
          </div>
          
        
      </div>  
    </div>
    );
}

export default LeadDetails;