import React from 'react';
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardAction,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import project1 from '../images/E-shop.png'


export default ()=>{
    return (
        <Box component={"div"}>
            <Navbar/>
            <Grid container justify={"center"} alignItems={"center"}>
                <Grid>
                    {/*Project 1*/}
                    <Card item xs={12} sm={8} md={6}>
                        <CardActionArea>
                            <CardMedia
                                component={"img"}
                                alt={"Project1"}
                                height={"140"}
                                image={project1}
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant={"h5"}>
                                    Project 1
                                </Typography>
                                <Typography variant={"body2"} color={"textSecondary"}>
                                    Project 1
                                </Typography>
                            </CardContent>

                        </CardActionArea>

                    </Card>
                </Grid>
            </Grid>

        </Box>
    )
};