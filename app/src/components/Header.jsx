import React, { useState } from "react";
import { makeStyles } from "@material-ui/core"
import { AppBar, Toolbar, Button, IconButton, Grid, Slide, useScrollTrigger, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import headphonesLogo from "../assets/desktop-6auxlogo1-6A76F79B-B362-4BA2-B330-1E9D04F0284A@2x.png";
import "../styles/Header.css";
import '../styles/Contact.css';

const useStyles = makeStyles(theme => ({
	navbarDisplayFlex: {
		display: `flex`,
	},
	linkText: {
		textDecoration: `none`,
		color: `white`,
		minWidth: `fit-content`
	},
	navLink: {
		textAlign: `center`,
		paddingLeft: `34px`,
		[theme.breakpoints.down('xs')]: {
			paddingLeft: `0px`,
			minWidth: `fit-content`
		}
	},
	navText: {
		paddingLeft: `34px`,
		[theme.breakpoints.down('sm')]: {
			paddingLeft: `18px`,
		},
		[theme.breakpoints.down('xs')]: {
			display: `none`,
		}
	},
	dropdownBtn: {
		[theme.breakpoints.up('xs')]: {
			display: `none`,
		},
		[theme.breakpoints.down('xs')]: {
			display: `flex`,
		}
	},
	dropdownLinks: {
		textDecoration: `none`,
		color: `white`,
		fontSize: `18px`
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const trigger = useScrollTrigger();

	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const scrollToTop = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector('#top');
		if (anchor)
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};

	const showDropdown = (event) => {
		setOpen(true);
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	}

	const navLinks = [
		{
			title: "About",
			path: "#1",
		}, {
			title: "How It Works",
			path: "#2",
		}, {
			title: "Features",
			path: "#3",
		}, {
			title: "Contact",
			path: "#4",
		}
	];
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar position="sticky" className="aux-appbar" style={{ boxShadow: "none" }} id="topofnav">
				<Toolbar>
					<Grid item container xs={2} sm={false} alignItems="center" className={classes.dropdownBtn} justify="center">
						<IconButton xs={2} edge="start" disableFocusRipple={true} disableRipple={true} color="inherit" aria-label="dropdown" onClick={showDropdown}>
							<MenuIcon />
						</IconButton>
						<Menu
							id="long-menu"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
								style: {
									maxHeight: 220,
									width: '20ch',
									border: 'solid 4px transparent',
									backgroundImage: 'linear-gradient(rgba(10, 10, 17, 0), rgba(10, 10, 17, 0)), linear-gradient(101deg, #6720B3, #A9209C)',
									backgroundOrigin: 'border-box',
									backgroundClip: 'content-box, border-box',
									boxShadow: '2px 1000px 1px rgb(0,0,0) inset',
									borderRadius: '15px',
								},
							}}
						>
							{navLinks.map((link) => (
								<MenuItem key={link.path} onClick={handleClose}>
									<a href={link.path} key={link.title} className={classes.dropdownLinks}>{link.title}</a>
								</MenuItem>
							))}
						</Menu>
					</Grid>
					<Grid item container xs={2} sm={1} justify="center">
						<IconButton edge="start" disableFocusRipple={true} disableRipple={true} color="inherit" aria-label="menu" onClick={scrollToTop}>
							<img src={headphonesLogo} height="78" alt="headphones logo" />
						</IconButton>
					</Grid>
					<Grid item container xs={8} sm={11} direction="row" justify="flex-end" >
						<Grid item container xs={false} sm={8} justify="flex-end" alignItems="center">
							{navLinks.map(({ title, path }) => (
								<Grid item className={classes.navLink, classes.navText}>
									<a href={path} key={title} className={classes.linkText}>{title}</a>
								</Grid>
							))}
						</Grid>
						<Grid item container xs={8} sm={2} className={classes.navLink} justify="flex-end">
							<Button variant="outlined" href={'#4'}>Beta Access</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Slide>
	)
}