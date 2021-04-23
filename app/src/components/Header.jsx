import React from "react";
import { makeStyles } from "@material-ui/core"
import { AppBar, Toolbar, Button, IconButton, Grid, Slide, useScrollTrigger } from '@material-ui/core';
import headphonesLogo from "../assets/desktop-6auxlogo1-6A76F79B-B362-4BA2-B330-1E9D04F0284A@2x.png";
import "../styles/Header.css";

const useStyles = makeStyles({
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
		paddingLeft: `34px`
	}
});

export default function Header(props) {
	const classes = useStyles();
	const trigger = useScrollTrigger();

	const scrollToTop = () => {
		console.log("icon clicked");
	}

	const navLinks = [
		{
			title: "How It Works",
			path: "#2",
		},
		{
			title: "Features",
			path: "#3",
		},
		{
			title: "Contact",
			path: "#4",
		}
	];

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar position="fixed" className="aux-appbar" style={{boxShadow: "none"}}>
				<Toolbar>
					<Grid container>
						<Grid item xs={3}>
							<a href="/">
								<IconButton edge="start" disableFocusRipple={true} disableRipple={true} className="menu-button mr-auto" color="inherit" aria-label="menu" onClick={scrollToTop}>
									<img src={headphonesLogo} height="78" alt="headphones logo" />
								</IconButton>
							</a>
						</Grid>
						<Grid item container xs={9} direction="row" alignItems="center" justify="center" >
							<Grid item container xs={9} justify="flex-end">
								{navLinks.map(({ title, path }) => (
									<Grid item className={classes.navLink}>
										<a href={path} key={title} className={classes.linkText} >{title}</a>
									</Grid>
								))}
							</Grid>
							<Grid item className={classes.navLink}>
								<Button variant="outlined" onClick={() => ""}>Download Beta</Button>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Slide>
	)
}