import {Fragment} from 'react';
import './RelatedList.css';
export default function RelatedList(props){
    const selectItem=(e)=>{
        props.selectVideo(e.target.attributes.name.value);
}
    const renderList=(list)=>{
        return(
            list.map(listItem=>{
                return (
                    <div className='related' onClick={selectItem} key={listItem.etag+listItem.id.videoId} id={listItem.etag+listItem.id.videoId}>
                        <iframe width='40%' src={"https://www.youtube.com/embed/"+listItem.id.videoId}></iframe>
                        <div className='description' name={listItem.etag+listItem.id.videoId}>
                            <p name={listItem.etag+listItem.id.videoId}>{`${listItem.snippet.title}`}</p>
                            <p name={listItem.etag+listItem.id.videoId}></p>
                        </div>
                    </div>
                );
            })
        );
    }
    return(
        <Fragment>
            {renderList(props.data)}
        </Fragment>
    );
}
