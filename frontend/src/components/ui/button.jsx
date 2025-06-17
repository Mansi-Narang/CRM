import Button from '@mui/material/Button';

export const IconContainedButton = ({ icon, textContent }) => {
    return <Button variant='contained' startIcon={icon}>{textContent}</Button>
}