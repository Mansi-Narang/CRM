import FeatureBox from "./FeatureBox";
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function Features() {
    return ( 
        <div className="flex justify-between mt-6">
        <FeatureBox bgColor="bg-[#FFE6ED]" textColor= "text-[#F5588C]" ImageIcon={<InventoryIcon fontSize="large"/>} dollar={1} text="5K" description="9 closed deals"/>
        <FeatureBox bgColor="bg-[#E6FAF8]" textColor= "text-[#00C7B1]" ImageIcon={<AssignmentIcon fontSize="large"/>} text="20" description="New Deals"/>
        <FeatureBox bgColor="bg-[#F6F1FF]" textColor= "text-[#8E4DFF]" ImageIcon={<MonetizationOnIcon fontSize="large"/>} dollar={1} text="20K" description="Est.revenue"/>
        <FeatureBox bgColor="bg-[#F4F3FF]" textColor= "text-[#7166F9]" ImageIcon={<MonetizationOnIcon fontSize="large"/>} dollar={1} text="10K" description="Est. Profit"/>
        </div>
     );
}

export default Features;