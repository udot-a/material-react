import React from 'react';
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import project1 from '../images/E-shop.png';
import project2 from '../images/project2.png';
import project3 from '../images/Project3.png';


const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
});

export default ()=>{
    const classes = useStyles();
    return (
        <Box component={"div"} className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify={"center"} >
                <Grid item xs={12} sm={8} md={6}>
                    {/*Project 1*/}
                    <Card className={classes.cardContainer} >
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
                                <Typography
                                    variant={"body2"}
                                    color={"textSecondary"}
                                    component={"p"}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Adipisci amet distinctio doloribus eveniet ex, excepturi expedita
                                    illum incidunt magnam magni nisi nobis nostrum perspiciatis, placeat
                                    porro repellendus totam veritatis voluptate.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size={"small"} color={"primary"}>
                                    Share
                                </Button>
                                <Button size={"small"} color={"secondary"}>
                                    Live Demo
                                </Button>
                            </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>

                    {/*Project 2*/}
                    <Card className={classes.cardContainer} >
                        <CardActionArea>
                            <CardMedia
                                component={"img"}
                                alt={"Project1"}
                                height={"140"}
                                image={project2}
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant={"h5"}>
                                    Project 2
                                </Typography>
                                <Typography
                                    variant={"body2"}
                                    color={"textSecondary"}
                                    component={"p"}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae deserunt doloribus excepturi labore natus necessitatibus
                                    optio ratione repellendus sequi voluptates! Accusantium aspernatur
                                    deleniti quos veritatis!
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                                <Button size={"small"} color={"primary"}>
                                    Share
                                </Button>
                                <Button  size={"small"} color={"secondary"}>
                                    Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>

                    {/*Project 3*/}
                    <Card className={classes.cardContainer} >
                        <CardActionArea>
                            <CardMedia
                                component={"img"}
                                alt={"Project1"}
                                height={"140"}
                                image={project3}
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant={"h5"}>
                                    Project 3
                                </Typography>
                                <Typography
                                    variant={"body2"}
                                    color={"textSecondary"}
                                    component={"p"}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias dolorum eos error est molestias natus nisi obcaecati
                                    porro quasi reprehenderit.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size={"small"} color={"primary"}>
                                    Share
                                </Button>
                                <Button  size={"small"} color={"secondary"}>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Box>
    )
};