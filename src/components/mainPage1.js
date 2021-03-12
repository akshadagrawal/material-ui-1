import { Grid, makeStyles, Typography,Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import pie from './2.png'
import Calendar from "react-calendar";



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
      }
});
const Main = () => {
    const classes= useStyles();

    return ( 

        <Grid container direction="column">
                <Grid item container className={classes.top}>
                    <Grid item xs={6}>
                        <Typography variant="h4" align="left">Fri,28 March <h3>Good Morning!</h3></Typography>
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
                <Grid item container spacing={4} xs={11} >
                    <Grid item xs={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom align="left">
                            Holi Holiday<Button className={classes.buttonStyle} variant="outlined" >Holiday</Button>
                            </Typography>
                            
                            <Typography component="p" align="left">
                            Activate every muscle and do nothing hello why hjbmsdm
                            and do whatrver you want to
                            </Typography>
                            <Typography align="right">
                            15th March, 2020
                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom align="left">
                            Holi Holiday<Button className={classes.buttonStyle} variant="outlined" >Holiday</Button>
                            </Typography>
                            
                            <Typography component="p" align="left">
                            Activate every muscle and do nothing hello why hjbmsdm
                            and do whatrver you want to
                            </Typography>
                            <Typography align="right">
                            15th March, 2020
                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </Grid>
                    <Grid item xs={4} x>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom align="left">
                            Holi Holiday<Button className={classes.buttonStyle} variant="outlined" >Holiday</Button>
                            </Typography>
                            
                            <Typography component="p" align="left">
                            Activate every muscle and do nothing hello why hjbmsdm
                            and do whatrver you want to
                            </Typography>
                            <Typography align="right">
                            15th March, 2020
                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </Grid>

                </Grid>
                <Grid item container className={classes.stylesAttend} spacing={4} >
                    <Grid item xs={7}>
                    <Card className={classes.root}>
                        <CardContent>
                        <Typography className={classes.title} gutterBottom align="left">
                            Attendence Record
                        </Typography>
                        <Typography  align="left">
                            Total Attendence records
                        </Typography>
                            <img src={pie} height="250px" width="400px" ></img>

                            
                         </CardContent>
                        
                       
                        <CardActions >
                            
                            <Typography align="right">Expand</Typography>
                        </CardActions>
                        
                        </Card>
                    </Grid>
                    <Grid item xs={4}><Calendar height="300px "/></Grid>

                </Grid>
        </Grid>
       
     );
}
 
export default Main;