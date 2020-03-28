import React from 'react'
import {useStyles} from "./styles";
import {
    Typography,
    Box,
} from '@material-ui/core';
import Navbar from "./Navbar";

export  default ()=> {
    const {
        mainContainer,
        timeLine,
        timeLineYear,
        timeLineItem,
        heading,
        subHeading
    } = useStyles();
    return (
        <>
            <Navbar/>
            <Box component={"header"}
                 className={mainContainer}
            >
                <Typography variant={"h4"}
                            align={"center"}
                            className={heading}
                >
                    working experience
                </Typography>

                <Box component={"div"} className={timeLine}>
                    <Typography variant={"h2"} className={`${timeLineYear} ${timeLineItem}`}>
                        2013
                    </Typography>
                    <Box component={"div"}
                         className={timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    className={subHeading}
                        >
                            web design
                        </Typography>
                        <Typography variant={"body1"}
                                    style={{color: "tomato"}}
                        >
                            company name where worked
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    style={{color: "tan"}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt earum eligendi eos illo impedit ipsum itaque odit placeat quas!
                        </Typography>

                    </Box>
                    <Typography variant={"h2"} className={`${timeLineYear} ${timeLineItem}`}>
                        2014
                    </Typography>
                    <Box component={"div"}
                         className={timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    className={subHeading}
                        >
                            html & css
                        </Typography>
                        <Typography variant={"body1"}
                                    style={{color: "tomato"}}
                        >
                            company name where worked
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    style={{color: "tan"}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt earum eligendi eos illo impedit ipsum itaque odit placeat quas!
                        </Typography>

                    </Box>
                    <Typography variant={"h2"} className={`${timeLineYear} ${timeLineItem}`}>
                        2015
                    </Typography>
                    <Box component={"div"}
                         className={timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    className={subHeading}
                        >
                            javascript full stack
                        </Typography>
                        <Typography variant={"body1"}
                                    style={{color: "tomato"}}
                        >
                            company name where worked
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    style={{color: "tan"}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt earum eligendi eos illo impedit ipsum itaque odit placeat quas!
                        </Typography>

                    </Box>
                    <Typography variant={"h2"} className={`${timeLineYear} ${timeLineItem}`}>
                        2017
                    </Typography>
                    <Box component={"div"}
                         className={timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    className={subHeading}
                        >
                            react | redux | graphql | apollo
                        </Typography>
                        <Typography variant={"body1"}
                                    style={{color: "tomato"}}
                        >
                            company name where worked
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    style={{color: "tan"}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt earum eligendi eos illo impedit ipsum itaque odit placeat quas!
                        </Typography>

                    </Box>



                </Box>


            </Box>
        </>
    )
};
