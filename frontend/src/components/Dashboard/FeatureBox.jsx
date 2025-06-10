import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function FeatureBox({bgColor, textColor, ImageIcon, dollar, text, description}) {
    return ( 
        <div className= {`flex px-10 py-6 w-fit ${bgColor} mx-5`}>
            <image className={`mr-6 mt-1 ${textColor}`}>
                {ImageIcon}
            </image>
            <div>
                <p className={`text-3xl font-bold ${textColor}`}>
                    {dollar && <AttachMoneyIcon fontSize='large'/>}
                    {text}
                </p>
                <p className='text-xl font-semibold mt-2'>{description}</p>
            </div>
        </div>
     );
}

export default FeatureBox;