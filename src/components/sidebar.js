import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import logo from './1.png';
import RecipeReviewCard from './avatar';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowX:'-moz-hidden-unscrollable',
   
    
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  logoStyling: {
      marginTop: -40,
      marginBottom: 10,
      marginLeft: 30
  },
  styleList: {
     background : "green",
     borderTopRightRadius: 50, 
     borderBottomRightRadius: 50, 
     textAlign:"left",
     width: 200

  }
}));



export default function PermanentDrawerLeft() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
      
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        
        <List >
            <ListItem className={classes.logoStyling} >
                <img src={logo}></img>
            </ListItem>
            <ListItem button  className={classes.styleList}>
                <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Home" />          
            </ListItem>

            <ListItem button >
                <ListItemIcon><AssignmentOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Notice Board" />          
            </ListItem>

            <ListItem button  >
                <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                    <ListItemText primary="Attendance" />          
            </ListItem>
            <ListItem buttononHover >
                <ListItemIcon><ReceiptOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Fees Details" />          
            </ListItem>
             <ListItem button >
                <ListItemIcon><EventNoteOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Calendar" />          
            </ListItem>
             
            <ListItem button >
                <ListItemIcon><PermMediaOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Multimedia" />          
            </ListItem>
            <ListItem button >
                <ListItemIcon><TableChartOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Time-tables" />          
            </ListItem>
            <ListItem button >
                <ListItemIcon><ScheduleOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Schedules" />          
            </ListItem>
            <ListItem button >
                <ListItemIcon><PeopleAltOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Support Requests" />          
            </ListItem>
            <ListItem button >
                <ListItemIcon><HelpOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Support" />          
            </ListItem>
            <ListItem button >
                <ListItemIcon><AccountCircleOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Account" />          
            </ListItem>

            <RecipeReviewCard/>
                
            
            

        </List>
       
      </Drawer>
      
    </div>
  );
}