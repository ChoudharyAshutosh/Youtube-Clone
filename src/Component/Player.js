import {Fragment, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, TextField } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import './Player.css';
const useStyles=makeStyles((theme)=>({
    container:{
        backgroundColor:"white",
        width:'100%',
        marginTop:'0.1%',
        marginLeft:'0.25%'
    },
    title:{
        wordBreak:'break-all',
        textAlign:'left',
    },
    like_button:{
        textAlign:'right',
        cursor:'pointer'
    },
    like:{
        color:'red',
        borderColor:'black',
        '& fieldset':{
            borderAll:'5',
            borderColor:'black',
        }},
    like2:{
        color:'black',
    },
    user:{
        width:'30%',
        marginRight:'15%',
    },
    comment:{
        width:'50%',
    },
    commentButtonSection:{
        textAlign:'right',
        margin:'1% 2% 2% 0%'
    },
    commentbutton:{
        marginRight:'2%',
    },
    person:{
        paddingBottom:'0%',
        color:'blue'
    }
}));
export default function Player(props){
    const style=useStyles();
    useEffect(()=>{
        document.querySelector("#comment-show").innerHTML='';
        let element=document.querySelector("#like");
        let favouriteborder='<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>'; 
        element.innerHTML=favouriteborder;
    },[props.selectedVideo]);
   const changeLike=(e)=>{
       let element=document.querySelector("#like");
       let favouriteicon='<svg class="MuiSvgIcon-root makeStyles-like-10" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><svg class="MuiSvgIcon-root makeStyles-like-10" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg></svg>';
       let favouriteborder='<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>'; 
       let pvalue=element.innerHTML;
        if(pvalue==favouriteicon)
        element.innerHTML=favouriteborder;
        else
        element.innerHTML=favouriteicon;
    }
    const clearForm=()=>{
        document.querySelector("#username").value='';
        document.querySelector("#comment").value='';
    };
    const uploadComment=()=>{
        let user=document.querySelector("#username");
        let comment=document.querySelector("#comment");
        let person='<svg class="MuiSvgIcon-root makeStyles-person-16" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>';
        document.querySelector("#comment-show").innerHTML+='<p>'+person+'<span>'+user.value+'</span></p><p>'+comment.value+'</p>';
        user.value='';
        comment.value='';
    };
    return(
        <Fragment>
            <iframe width="100%" height="88%" src={"https://www.youtube.com/embed/"+props.selectedVideo.id.videoId}></iframe>
             <Grid className={style.container} container spacing={3}>
                <Grid className={style.title} item xs={11}>{`${props.selectedVideo.snippet.title}`}</Grid>
                <Grid className={style.like_button} id='like' onClick={changeLike} item xs={1}><FavoriteBorderIcon onClick={changeLike} className={style.like2}/></Grid>
            </Grid>
            <div className='comment-section'>{/*console.log(props.selectedVideo.id.videoId)*/}
                <p className='comment-heading'>Comments</p>
                <div>
                    <TextField label='UserName' className={style.user} id='username'/>
                    <TextField label='Comment' className={style.comment} id='comment'/>
                </div>
                <div className={style.commentButtonSection}>
                    <Button className={style.commentbutton} onClick={uploadComment} variant="contained" size="medium">Comment</Button>
                    <Button variant="contained" size="medium" onClick={clearForm}>Cancel</Button>
                </div>
                <div id='comment-show'>
                </div>
            </div>
        </Fragment>
    );
}