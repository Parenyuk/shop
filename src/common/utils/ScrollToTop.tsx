import { IconButton } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {useAppStyles} from '../../App';

export const useScrollToTopStyles = makeStyles((theme: Theme) => ({
    scrollToTop: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20,



    }
}))


type PropsType = {
    showBelow: number
}

export const ScrollToTop = ({showBelow}: PropsType ) => {
    const [show, setShow] =useState(showBelow ? false : true);
    const classes = useScrollToTopStyles();

    const handleScroll = () => {
        if(window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else  {
            if (show) setShow(false)
        }

    }

    const handleClick = () => {
         window[`scrollTo`]({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        if(showBelow) {
            window.addEventListener(`scrool`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    }, [])

    return (
        <div  className={classes.scrollToTop}>
            <IconButton onClick={handleClick}>
                   <ExpandLessIcon />
               </IconButton>

        </div>

    )
}
