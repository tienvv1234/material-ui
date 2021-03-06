import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const ElevationScroll = (props) => {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.Toolbar,
		marginBottom: '7em',
	},
	logo: {
		height: '8em',
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px', // make 4 corner rounded asides
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px',
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClink = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true)
	}

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpen(false);
	}

	useEffect(() => {
		if (window.location.pathname === '/' && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === '/services' && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === '/revolution' && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === '/about' && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === '/contact' && value !== 4) {
			setValue(4);
		} else if (window.location.pathname === '/estimate' && value !== 5) {
			setValue(5);
		}
	}, [value]);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position='fixed'>
					<Toolbar disableGutters>
						<Button component={Link} to='/' disableRipple onClick={() => setValue(0)} className={classes.logoContainer}>
							<img src={logo} className={classes.logo} alt='company logo' />
						</Button>
						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}
							indicatorColor='primary'
						>
							<Tab
								className={classes.tab}
								label='Home'
								component={Link}
								to='/'
							/>
							<Tab
								aria-owns={anchorEl ? "simple-menu" : undefined}
								aria-haspopup={anchorEl ? "true" : undefined}
								onMouseOver={(e) => handleClink(e)}
								className={classes.tab}
								label='Services'
								component={Link}
								to='/services'
							/>
							<Tab
								className={classes.tab}
								label='The Revolution'
								component={Link}
								to='/revolution'
							/>
							<Tab
								className={classes.tab}
								label='About Us'
								component={Link}
								to='/about'
							/>
							<Tab
								className={classes.tab}
								label='Contact Us'
								component={Link}
								to='/contact'
							/>
						</Tabs>
						<Button
							variant='contained'
							color='secondary'
							className={classes.button}
						>
							Free Estimate
						</Button>
						<Menu id="simeple-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
							<MenuItem onClick={() => { handleClose(); setValue(1); }} component={Link} to="/customsoftware">
								Custom Software Development
							</MenuItem>
							<MenuItem onClick={() => { handleClose(); setValue(1); }} component={Link} to="/mobileapp">
								Mobile App Development
							</MenuItem>
							<MenuItem onClick={() => { handleClose(); setValue(1); }} component={Link} to="/websites">
								Website Development
							</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
