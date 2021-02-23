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
export default function SearchBar(props){
    const search=useStyles();
    const makeCall=()=>{
        let inputComponent=document.querySelector("#Search");
        props.makeSearch(inputComponent.value);
        inputComponent.value='';
    }
    return(
        <div className='bar'>
            <TextField className={search.textarea} size="small" id="Search" variant="outlined"></TextField>
            <Button className={search.button} onClick={makeCall} variant="contained" size="large" ><Search/></Button>
        </div>
    );
}