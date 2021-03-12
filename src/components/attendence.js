import { Grid } from '@material-ui/core';
import PermanentDrawerLeft from './sidebar';
import Main2 from './mainPage2';


const Attendence = () => {
    return ( 
        
        <Grid container>
            <Grid item xs={2}>
                <PermanentDrawerLeft />
            </Grid>
            <Grid item xs={10}>
                <Main2 />
            </Grid>
        </Grid>

     );
}
 
export default Attendence;