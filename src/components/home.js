import { Grid } from '@material-ui/core';
import Main from './mainPage1';
import PermanentDrawerLeft from './sidebar';

const Home = () => {
    return (  

        <Grid container>
            <Grid item xs={2}>
                <PermanentDrawerLeft />
            </Grid>
            <Grid item xs={10}>
                <Main/>
            </Grid>
        </Grid>

         
            
            

        
  
     );
}
 
export default Home;