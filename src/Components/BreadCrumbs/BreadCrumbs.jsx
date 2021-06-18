import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    crumbs: {
        display: 'flex',
        padding: '0.2em',
        color: 'cyan',
    },
}));

const BreadCrumbs = () => {
    const classes = useStyles();

    return(
        <div className={ classes.crumbs }>
            These crumbs are a placeholder
        </div>
    );
}

export default BreadCrumbs;