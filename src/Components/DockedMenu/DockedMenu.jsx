import { makeStyles, Box, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menu: {
        boxSizing: 'border-box',
        minWidth: '200px', 
        backgroundColor: '#002984',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid black'
    },
    button: {
        textTransform: 'none',
        color: 'white',
    }
}));

const DockedMenu = () => {
    const classes = useStyles();

    return(
        <Box className={ classes.menu }>
            <Button component={RouterLink} to={'/'} className={ classes.button }>Home</Button>\
        </Box>
    );
}

export default DockedMenu;