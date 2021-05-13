import React, { useState } from "react";
import { makeStyles } from "@material-ui/core"
import { AppBar, Toolbar, Button, IconButton, Grid, Slide, useScrollTrigger, Menu, MenuItem, Typography, TextField, Modal } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import headphonesLogo from "../assets/actual-aux-logo.png";
import "../styles/Header.css";
import '../styles/Contact.css';
import { db } from "../firestore.js";
import popupImage from '../assets/ContactPopUp.png';

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
	},
	paper: {
		position: 'absolute',
		width: 675,
		height: 450,
		left: '50%',
		top: '50%',
		marginLeft: -337,
		marginTop: -200,
		backgroundImage: `url(${popupImage})`,
		backgroundSize: 'contain',
		borderRadius: '20px',
		[theme.breakpoints.down('sm')]: {
			width: `100%`,
			maxWidth: `100vw`,
			maxHeight: `100%`,
			marginLeft: `-50vw`,
			backgroundSize: `cover`
		}
	},
	innerContact: {
		margin: '5%'
	},
	contactForm: {
		marginTop: '10px',
		width: 607.5,
		height: 315,
	},
	contactItem: {
		background: 'rgba(216, 216, 216, 0.5)',
		borderRadius: '10px'
	},
	multilineColor: {
		color: 'white'
	},
	label: {
		color: 'white'
	},
	focusedLabel: {
		color: 'white'
	},
	contactBackdrop: {
		background: 'rgba(0,0,0, 0.8) !important'
	},
	submitBtn: {
		backgroundColor: '#0A0A11',
		"&:hover, &:focus": {
			backgroundColor: '#0A0A11 !important',
		},
		boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
		border: 'solid 3px transparent',
		backgroundImage: 'linear-gradient(rgba(10, 10, 17, 0), rgba(10, 10, 17, 0)), linear-gradient(101deg, #6720B3, #A9209C)',
		backgroundOrigin: 'border-box',
		backgroundClip: 'content-box, border-box',
		boxShadow: '2px 1000px 1px #0A0A11 inset',
		borderRadius: '90px'
	},
	modal: {
		outline: 'none !important',
		[theme.breakpoints.down('sm')]: {
			maxWidth: `100vw`,
		}
	},
	betaAccess: {
		backgroundColor: '#0A0A11',
		"&:hover, &:focus": {
			backgroundColor: '#0A0A11 !important',
		},
		boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
		border: 'solid 3px transparent',
		backgroundImage: 'linear-gradient(rgba(10, 10, 17, 0), rgba(10, 10, 17, 0)), linear-gradient(101deg, #6720B3, #A9209C)',
		backgroundOrigin: 'border-box',
		backgroundClip: 'content-box, border-box',
		boxShadow: '2px 1000px 1px #0A0A11 inset',
		borderRadius: '90px',
		marginTop: '20px',
		whiteSpace: `nowrap`,
		minWidth: `22vw`,
		width: `fit-content`
	},
	formContainer: {
		maxWidth: `80vw`,
		width: 'auto',
		margin: 0
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const trigger = useScrollTrigger();
	let appleid, fname, lname, email, phone, message = "";

	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [accessSuccess, setAccessSuccess] = useState(false);
	const [openTwo, setOpenTwo] = useState(false);

	const scrollToTop = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector('#top');
		if (anchor)
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};

	const handleOpenTwo = () => {
		setOpenTwo(true);
	}

	const handleCloseTwo = () => {
		setOpenTwo(false);
		setAccessSuccess(false);
		appleid = email = "";
	}


	const getAccess = (e) => {
		e.preventDefault();
		const data = { email, appleid };
		const accessRef = db.collection("beta-access").add(data);
		setAccessSuccess(true);
		setTimeout(handleCloseTwo, 1000);
	}

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

	const bodyTwo = (
		<div className={classes.paper}>
			<div className={classes.innerContact}>
				<Typography align="center" variant="h4"> Submit your Apple ID to request beta access today:</Typography>
				<form className={classes.contactForm} noValidate autoComplete="off">
					<Grid item container spacing={3} className={classes.formContainer}>
						<Grid item xs={12}>
							<TextField
								className={classes.contactItem}
								label="Email"
								variant="filled"
								fullWidth
								required
								onChange={e => (email = e.target.value)}
								InputProps={{
									className: classes.multilineColor
								}}
								InputLabelProps={{
									classes: {
										root: classes.label,
										focused: classes.focusedLabel,
									},
								}}
							>
							</TextField>
						</Grid>
						<Grid item xs={12}>
							<TextField
								className={classes.contactItem}
								label="Apple ID"
								variant="filled"
								fullWidth
								required
								onChange={e => (appleid = e.target.value)}
								InputProps={{
									className: classes.multilineColor
								}}
								InputLabelProps={{
									classes: {
										root: classes.label,
										focused: classes.focusedLabel,
									},
								}}
							>
							</TextField>
						</Grid>
						<Grid item xs={12}>
							<Typography align="center">
								<Button variant="contained" className={classes.betaAccess} onClick={e => getAccess(e)}>
									<Typography align="center" variant="h6"> Get Access </Typography>
								</Button>
								{accessSuccess ? <p>Early access request sent successfully!</p> : <></>}
							</Typography>
						</Grid>
					</Grid>
				</form>
			</div>
		</div>
	)

	return (<>
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
								<Grid item className={`${classes.navLink} ${classes.navText}`}>
									<a href={path} key={title} className={classes.linkText}>{title}</a>
								</Grid>
							))}
						</Grid>
						<Grid item container xs={8} sm={2} className={classes.navLink} justify="flex-end">
							<Button variant="outlined" onClick={handleOpenTwo}>Request Beta Access</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Slide>
		<Modal
			open={openTwo}
			onClose={handleCloseTwo}
			BackdropProps={{
				className: classes.contactBackdrop
			}}
			disableAutoFocus={true}
			disableEnforceFocus={true}
			className={classes.modal}
			style={{display:'flex',alignItems:'center',justifyContent:'center'}}
		>
			{bodyTwo}
		</Modal>
	</>
	)
}