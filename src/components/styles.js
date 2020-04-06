import {makeStyles} from "@material-ui/styles";
import {Apps, AssignmentInd, ContactMail, Home} from "@material-ui/icons";
import React from "react";

const FIRST = "../images/apple.jpg";

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
    },
    particlesCanva: {
        position: "absolute",
        minWidth: "100vw",
        minHeight: "100vh",
        opacity: "0.3"
    },
    mainContainer: {
        backgroundColor: "#233",
        color: "tomato"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            },

        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },

    timeLineYear: {
            textAlign: "center",
            maxWidth: "9.375rem",
            margin: "0 3rem 0 auto",
            fontSize: "1.8rem",
            background: "tomato",
            color: "white",
            lineHeight: 1,
            padding: "0.5rem 0 1rem",

            "&:before": {
                display: "none"
            },
            [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                    float: "none",
                    margin: "0 auto"
                },
                "&:nth-of-type(2n):before": {
                    display: "none"
                }
            }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",

    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase",

    }
}))

/**
 * Array of Icons uses in all Components
 * @type {Object}
 */
export const menuIcons = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"

    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/"

    },
]
