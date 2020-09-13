import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';
import StoreIcon from '@material-ui/icons/Store';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { InitialData } from '../../Reducer/ShoeSlice'
import { ItemData } from '../../Reducer/ShoeSlice'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: '#F4D03F',
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Bree Serif',
    fontSize: '24px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'white'
  },
  inputRoot: {
    color: 'inherit',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  Nikelogo: {
    width: '49px',
    height: '49px',
    //   marginLeft: '7px'
  },
}));


export function Navbar() {
  const dispatch = useDispatch();
  let itemdata = useSelector(ItemData);

  let Item = itemdata.toString()

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Link to='/product'>
            <StoreIcon style={{ color: 'black' }} />
          </Link>
        </IconButton>
        <Link to='/product' onClick={() => { dispatch(InitialData()) }}>
          <p style={{ color: 'black', textDecoration: 'none' }}>Product</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={itemdata === 0 ? null : Item} color="secondary">
            <Link to='/cart'>
              <ShoppingCartIcon style={{ color: 'black' }} />
            </Link>
          </Badge>
        </IconButton>
        <Link to='/cart'>
          <p style={{ color: 'black', textDecoration: 'none' }}>
            Shopping
         </p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <a href="https://github.com/A-Rehman01/Shoe_Store_Redux">
            <GitHubIcon style={{ color: 'black' }} />
          </a>
        </IconButton>
        <a href="https://github.com/A-Rehman01/Shoe_Store_Redux">
          <p style={{ color: 'black', textDecoration: 'none' }}>GitHub</p>
        </a>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar style={{ backgroundColor: '#1ABC9C' }} position="static">
        <Toolbar>

          <Link to='/'>
            <img className={classes.Nikelogo}
              src="https://www.freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png" alt="Logo" />
          </Link>
          <Typography className={classes.title} variant="h6" >
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
              Store
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to='/product' onClick={() => { dispatch(InitialData()) }}>
                <StoreIcon style={{ fontSize: '32px', marginTop: '3px', color: 'white', textDecoration: 'none' }} />
              </Link>
            </IconButton>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={itemdata === 0 ? null : Item} style={{ marginTop: '5px' }} color="secondary">
                <Link to='/cart'>
                  <ShoppingCartIcon style={{ fontSize: '34px', color: 'white', textDecoration: 'none' }} />
                </Link>
              </Badge>
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <a href="https://github.com/A-Rehman01/Shoe_Store_Redux">
                <GitHubIcon style={{ fontSize: '32px', marginTop: '3px', color: 'white', textDecoration: 'none' }} />
              </a>
            </IconButton>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
