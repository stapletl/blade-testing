import MenuAppBar from "../MenuAppBar/MenuAppBar";
import DockedMenu from "../DockedMenu/DockedMenu";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Blade1 from "../Blade1/Blade1";
import Blade0 from "../Blade0/Blade0";
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    layoutContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
    },
    mainContent: {
        display: 'flex',
        height: 'calc(100vh - 64px)',
    },
    crumbContainer: {
        minWidth: 'calc(100vw - 200px)',
        display: 'flex',
        flexDirection: "column",
        backgroundColor: '#424242',
    },
    bladeContainer: {
        color: 'white',
        display: 'flex',
        flex: 1,
        backgroundColor: '#424242',
        overflowX: 'auto',
        overflowY: 'hidden',
        maxWidth: '100%',
    },
}));

const Layout = () => {
    const classes = useStyles();

    // const scroll = () => {
    //     window.scrollBy(0,-100);
    //     console.log('Most definitely scrolling');
    // }

    return(
        <div className={ classes.layoutContainer }>
            <MenuAppBar/>
            <div>
                <div className={ classes.mainContent }>
                    <DockedMenu/>
                    <div className={ classes.crumbContainer }>
                        <BreadCrumbs/>
                        <div className={ classes.bladeContainer }>
                            <Switch>
                                <Route path={'/'}>
                                    <Blade0/> 
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;