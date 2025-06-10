import DealFunnel from "./DealFunnel";
import Features from "./features";
import MeetingsDashboard from "./MeetingsDashboard";
import Nav from "./Nav";
import OpportunityStage from "./Opportunity";
import Profit from "./Profit";
import RevenueVsLead from "./RevenueVsLead";

function Hero() {
    return ( 
        <>
        <Nav/>
        <Features/>
        <div className="flex justify-between mx-6 my-12">
            <DealFunnel/>
            <OpportunityStage/>
        </div>
        <RevenueVsLead/>
        <div className="flex justify-evenly">
        <Profit/>
        <MeetingsDashboard/>
        </div>

        </>
     );
}

export default Hero;