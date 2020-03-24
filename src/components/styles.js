import {makeStyles} from "@material-ui/styles";
import {Apps, AssignmentInd, ContactMail, Home} from "@material-ui/icons";
import React from "react";

/**
 * Style uses in all components
 * @type {Object}
 */
export const useStyles = makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%"
    },
    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color: "tan"
    },
    headerAvatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    headerTitle:{
        color: "tomato"
    },
    headerSubtitle:{
        color: "tan",
        marginBottom: "3rem"
    },
    headerContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
    particlesCanva: {
        position: "absolute"
    }
}))

/**
 * Array of Icons uses in all Components
 * @type {Object}
 */
export const menuIcons = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    },
]
