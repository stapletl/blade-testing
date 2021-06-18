import { makeStyles, Box, Button } from '@material-ui/core';
import { Switch, Route, useRouteMatch, Link as RouterLink } from 'react-router-dom';
import Blade2 from "../Blade2/Blade2";

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
        BorderRight: '1px solid black',
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

const Blade1 = () => {
    const classes = useStyles();
    const { path, url } = useRouteMatch();
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
                    Blade1
                </h1>
                <Button onClick={ () => console.log(path) }>
                    Scroll?
                </Button>
                <Button component={RouterLink} to={path + '/Blade2'}>
                    Add a Blade2
                </Button>
                <Button component={RouterLink} to={closeTo}>
                    Close
                </Button>
            </div>


        </Box>
        <Switch>
            <Route path={ path + '/Blade2'}>
                <Blade2/>
            </Route>
        </Switch>
        </>
    );
}

export default Blade1;