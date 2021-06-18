import { makeStyles, Box, Button } from '@material-ui/core';
import { Switch, Route, useRouteMatch, Link as RouterLink } from 'react-router-dom';
import Blade1 from "../Blade1/Blade1";

const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: 'border-box',
        minWidth: '100%',
        display: 'flex',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
        textAlign: 'center',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '200px',
        backgroundColor: '#323232',
        padding: '0.3em',
        borderRight: '1px solid black',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.3em',
        overflowY: 'auto',
        maxWidth: '100%'
    },
    button: {
        textTransform: 'none',
        color: 'white',
    },
    ovBox: {
        color: 'white',
        backgroundColor: '#222222',
        minHeight: '800px',
        minWidth: '2000px'
    },
}));

const Blade0 = () => {
    const classes = useStyles();
    const { url } = useRouteMatch();
    const closeTo = url.substring(0,url.lastIndexOf('/'));

    const scroll = () => {
        window.scrollTo(-1600,-200);
        console.log('Most definitely scrolling, inner width: ', window.screenLeft);
    }

    return(
        <>
        <Box className={ classes.root }>
            <div className={ classes.menu }>
                <Button className={ classes.button }> Item One </Button>
                <Button className={ classes.button }> Item Two </Button>
                <Button className={ classes.button }> Item Three </Button>
            </div>
            <div className={ classes.content }>
                <h1>
                    Blade0
                </h1>
                <Button onClick={ scroll }>
                    Scroll?
                </Button>
                <Button className={ classes.button } component={RouterLink} to={'/Blade1'}>
                    Add a Blade1
                </Button>
                <Button className={ classes.button } component={RouterLink} to={closeTo}>
                    Close
                </Button>
                Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text 
                <Box className={ classes.ovBox }>
                    This is a box
                </Box>
            </div>
        </Box>

        <Switch>
            <Route path={'/Blade1'}>
                <Blade1/>
            </Route>
        </Switch>
        </>
    );
}

export default Blade0;