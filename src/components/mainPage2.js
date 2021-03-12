import { Grid, makeStyles, Typography,Button, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);


const useStyles= makeStyles({
    borderss:{
        background:"red"
    },
    top:{
        marginTop: 50
    },
   
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 25,
        fontWeight: 5
      },
      pos: {
        marginBottom: 12,
      },
      marginCard:{
          marginRight:100 
      },
      buttonStyle:{
        marginLeft: 150,
        
      },
      stylesAttend:{
          marginTop:40
      },
      stylesAttendBtn:{
            marginTop: 60
      },
      stylesAttendBtn2:{
        marginTop: 50,
        
  },
  stylesAttendBtn3:{
      marginTop:40,
      
  },
  styleDate:{
      background:"blue",
      height: 70,
      align: "center",
      borderRadius: 25,
      marginTop: -10,
      textAlign:"center"
    
  },
  styleDate2:{
      marginTop: 9
  },
  styleOthers:{
      marginTop: 20
  },
  styleTopo:{
      marginTop: 10,
      marginLeft: 10
  }
   
});
const defaultProps = {
    bgcolor: 'green',
    textAlign:"center",
    borderColor: 'text.primary',
    m: 1,
    style: { width: '4rem', height: '4rem' },
  };
const Main2 = () => {
    const classes= useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleButttonAbsent=(e)=>{
        e.target.color="red"
    }


    return ( 

        <Grid container direction="column">
                <Grid item container className={classes.top}>
                    <Grid item xs={6}>
                        <Typography variant="h3" align="left">Attendance</Typography>
                    </Grid>
                    <Grid item container xs={6}> 
                       <Grid item xs={8} >
                        <div >
                            <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <SearchIcon />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Search" />
                            </Grid>
                            </Grid>
                        </div>
                        </Grid>
                        <Grid item xs={4} >
                            <IconButton aria-label="show 11 new notifications" color="inherit">
                                <Badge badgeContent={11} color="secondary">
                                    <NotificationsOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Grid>                                              
                    </Grid>
                  </Grid>

                  <Grid item container xs={5} spacing={3} className={classes.stylesAttendBtn}>
                      <Grid item xs={3}>
                      <div>
                            <Button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                Open Menu
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <SendIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Sent mail" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                </StyledMenuItem>
                            </StyledMenu>
                        </div>

                      </Grid>
                      <Grid item xs={3}>

                      <div>
                            <Button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                Open Menu
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <SendIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Sent mail" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                </StyledMenuItem>
                            </StyledMenu>
                        </div>
                      </Grid>
                      <Grid item xs={3}>

                      <div>
                            <Button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                Open Menu
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <SendIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Sent mail" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                </StyledMenuItem>
                            </StyledMenu>
                        </div>
                      </Grid>
                      <Grid item xs={3}>

                      <div>
                            <Button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                Open Menu
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <SendIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Sent mail" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                <ListItemIcon>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                </StyledMenuItem>
                            </StyledMenu>
                        </div>
                      </Grid>
                  </Grid>
                <Grid item container xs={6} spacing={2}  className={classes.stylesAttendBtn2} >

                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>1</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>2</Grid>
                            <Grid item>Mon</Grid>

                        </Grid></Grid> 
                    <Grid item xs={1}>
                        <Grid item container direction="column" className={classes.styleDate}>
                            <Grid item className={classes.styleDate2}>3</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>4</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>5</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                        <Grid item xs={1}>
                    <Grid item container direction="column">
                            <Grid item>6</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>7</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>8</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>9</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>10</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item container direction="column">
                            <Grid item>11</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                         <Grid item container direction="column">
                            <Grid item>12</Grid>
                            <Grid item>Mon</Grid>

                        </Grid>
                    </Grid>
                    
                    
                </Grid>
                <Grid item container  direction="column" xs={5} className={classes.stylesAttendBtn3}>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained" className={classes.styleOthers} >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    <Grid item container >
                        <Grid item xs={2} className={classes.stylePeriod}><Box borderRadius="50%" {...defaultProps}><Typography >01st Period</Typography></Box></Grid>
                        <Grid item xs={4} className={classes.styleName}><Button color="secondary" variant="contained"  className={classes.styleOthers}  >Abhishek Yadav</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}  >Present</Button></Grid>
                        <Grid item xs={3}><Button color="default" variant="contained"  className={classes.styleOthers}   onClick={handleButttonAbsent}>Absent</Button></Grid>
                    </Grid>
                    
                </Grid>
        </Grid>
       
     );
}
 
export default Main2;