import React from 'react';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'
import Typed from 'react-typed';
import avatarImg from '../images/business-male-user-avatar.png'
import {useStyles} from "./styles";
/**
 * компонент Header
 */
export default ()=>{
    const {
        headerAvatar,
        headerTitle,
        headerSubtitle,
        headerContainer
    } = useStyles();

        return (
                <Box className={headerContainer}>
                    <Grid container justify={"center"}>
                        <Avatar src={avatarImg}
                                alt={"Avatar picture"}
                                className={headerAvatar}
                        />
                    </Grid>
                    <Typography variant={"h4"}
                                className={headerTitle}
                    >
                        <Typed strings={["Andrii Udot"]}
                            typeSpeed={40}
                        />
                    </Typography>
                    <br/>
                    <Typography variant={"h5"}
                                className={headerSubtitle}
                    >
                        <Typed strings={["Web Design", "Web Development","Apollo React "]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                    </Typography>
                </Box>
    )
}