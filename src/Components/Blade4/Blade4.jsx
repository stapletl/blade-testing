import { makeStyles, Box, Button } from '@material-ui/core';
import { Switch, Route, useRouteMatch, Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: 'border-box',
        minWidth: '100%',
        display: 'flex',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        backgroundColor: '#323232',
        padding: '0.3em',
        borderRight: '1px solid black',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.3em',
    },
    button: {
        textTransform: 'none',
        color: 'white',
    },
}));

const Blade4 = () => {
    const classes = useStyles();
    const { path, url } = useRouteMatch();
    const closeTo = url.substring(0,url.lastIndexOf('/'));

    const scroll = () => {
        window.scrollTo(-1600,-200);
        console.log('Most definitely scrolling, inner width: ', window.screenLeft);
    }

    return(
        <Box className={ classes.root }>
            <div className={ classes.menu }>
                <Button className={ classes.button }> Item One </Button>
                <Button className={ classes.button }> Item Two </Button>
                <Button className={ classes.button }> Item Three </Button>
            </div>
            <div className={ classes.content }>
                <h1>
                    Blade4
                </h1>
                <Button onClick={ () => console.log(path) }>
                    Scroll?
                </Button>
                <Button >
                    No more haha
                </Button>
                <Button component={RouterLink} to={closeTo}>
                    Close
                </Button>
            </div>
        </Box>
    );
}

export default Blade4;