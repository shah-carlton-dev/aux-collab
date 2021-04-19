import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, List, ListItem, Drawer, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Assessment, BurstMode, Email, CalendarToday } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [count, setCount] = React.useState(0);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const switchIcon = (i) => {
		switch(i) {
			case 0:
				return <Assessment/> 
			case 1:
				return <BurstMode/> 
			case 2:
				return <Email/>
			case 3:
				return <CalendarToday/>
		}
	}
	const list = <List>
		{['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'].map((text, index) => (
			<ListItem button key={text}>
				<ListItemIcon> {switchIcon(index) } </ListItemIcon>
				<ListItemText primary={text} />
			</ListItem>
		))}
	</List>
	return (<>
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Home
          		</Typography>
				<Button color="inherit" onClick={()=>setCount(count+1)}>Click me</Button>
				{count}
			</Toolbar>
		</AppBar>
		<Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
			{list}
		</Drawer>

	</>)
}