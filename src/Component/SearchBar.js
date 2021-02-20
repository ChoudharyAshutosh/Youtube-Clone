import {TextField,  Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import './SearchBar.css';
const useStyles= makeStyles((theme)=>({
    textarea:{
            marginRight:'0%',
            borderRight: "0px",
            width:'40%',
            '& fieldset': {
                borderRadius: `4px 0 0 4px`,
                boxShadow:'0px 2px 2px 0.5px lightgrey',
              },
    },
    button:{
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0,
    },
}));
export default function SearchBar(){
    const search=useStyles();
    return(
        <div className='bar'>
            <TextField className={search.textarea} size="small" id="Search" variant="outlined"></TextField>
            <Button className={search.button} variant="contained" size="large" ><Search/></Button>
        </div>
    );
}