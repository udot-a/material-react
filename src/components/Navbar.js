import React, {useState} from 'react';
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
    Box,
    ListItemIcon
} from '@material-ui/core'
import {
    ArrowBack
} from '@material-ui/icons'
import avatarPict from '../images/business-male-user-avatar.png';
import {menuIcons, useStyles} from "./styles";
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom'
import Footer from "./Footer";

/**
 * Компонент Navbar
 * @returns {*}
 */
export default () => {

    const [state, setState] = useState({
        right: false
        }
    );

    const toggleSlider = (slider, open) => () =>{
        setState({...state, [slider]: open})
    }
    const {
        menuSliderContainer,
        avatar,
        listItem
    } = useStyles();

    /**
     * Функция рендерит элемент списка иконок профиля
     * @param {Object}item - элемент массива
     * @param {String}key - уникальный ключ
     * @returns {String} - возвращает JSX разметку
     */
    const renderListItem = (item, key) => {
        const {listIcon, listText, listPath} = item;

        return (
                        <ListItem  button
                                   key={key}
                                   component={Link}
                                   to={listPath}
                        >
                            <ListItemIcon className={listItem}>
                                {listIcon}
                            </ListItemIcon>
                            <ListItemText className={listItem}>
                                {listText}
                            </ListItemText>
                        </ListItem>
                )
    };
    /**
     * Отображение бокового меню портфолио
     * @param {String}slider - выбор стороны меню
     * @returns {Object}JSX - возвращает разметку бокового меню
     */
    const sideList = slider =>(

        <Box component={"div"}
             className={menuSliderContainer}
             onClick={toggleSlider(slider, false)}
        >
            <Avatar
                src={avatarPict}
                alt={"Avatar picture"}
                className={avatar}
            />
            <Divider/>
            <List>
                {menuIcons.map(renderListItem)}
            </List>
        </Box>

    )

    return(
        <>
            <Box component={"nav"}>
                <AppBar position={"sticky"}
                        style={{background:"#222"}}
                >
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color:"tomato"}}/>
                        </IconButton>
                        <Typography variant={"h5"}
                                    style={{color:"tan"}}
                        >
                            {"Portfolio"}
                        </Typography>

                        <MobileRightMenuSlider
                            anchor={"right"}
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                            <Footer/>
                        </MobileRightMenuSlider>

                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}