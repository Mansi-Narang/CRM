import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TuneIcon from '@mui/icons-material/Tune';


function Nav() {
    return ( 
        <nav className="p-5 flex justify-between">
            <p className="text-3xl font-bold">Dashboard</p>
            <div className="options  w-[30%] flex justify-evenly">
                <div className="option1 flex border-2 rounded p-2 bg-gray-200 border-gray-50">
                    <p className='me-2'><CalendarTodayIcon fontSize='small'/></p>
                    <p className='flex'>Sep 01, 2022 <ArrowForwardIcon fontSize='small' className='ml-1 mr-1 pt-1'/> Sep 30, 2022 <KeyboardArrowDownIcon fontSize='medium' className='pt-1'/></p>
                </div>
                <div className="option2 flex border-2 rounded p-2 bg-gray-200 border-gray-50"><FilterAltIcon/></div>
                <div className="option3 flex border-2 rounded p-2 bg-gray-200 border-gray-50"><TuneIcon/></div>
            </div>
        </nav>
     );
}

export default Nav;