import Stack from "@mui/material/Stack";
import { IconContainedButton } from "./ui/button";
import { SearchInput } from './ui/input';
import AddIcon from '@mui/icons-material/Add';

function Leads() {
    return(
        <main className="container">
            <div className="heading">
                <h1>Leads</h1>
            </div>
            <div className="inputGroup">
                <IconContainedButton textContent={"New"} icon={<AddIcon />} />
                <SearchInput />
            </div>
        </main>
    );
}

export default Leads;