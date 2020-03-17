import React from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import {makeStyles} from "@material-ui/styles";
import avatar from '../images/avatarko_anonim.jpg'

//CSS Styles
const useStyles = makeStyles({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"30rem"
    }
})

export default () => {
    const {
        menuSliderContainer
    }=useStyles()
    return(
        <>
            <Box component={"div"} className={menuSliderContainer}>
                <Avatar src={avatar} alt={"Avatar picture"}/>
            </Box>
            <Box component={"nav"}>
                <AppBar position={"static"} style={{background:"#222"}}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{color:"tomato"}}/>
                        </IconButton>
                        <Typography variant={"h5"} style={{color:"tan"}}>
                            {"Portfolio"}
                        </Typography>

                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}