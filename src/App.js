import {useEffect, useState} from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import RelatedList from './Component/RelatedList';
import Player from './Component/Player';
import axios from 'axios';
function App() {
  const [stateData, setData]=useState([]);
  const [selectedVideo, selectVideo]=useState(null);
  const makeCall=(search)=>{
    let url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+search+'&relevanceLanguage=en&key=AIzaSyDzsaB9lvsq_EToPY4fVar9_6OEra3XijM';
    axios.get(url).then((response)=>{
      setData(response.data.items);
      selectVideo(response.data.items[0])
      console.log(response.data.items[0]);
    });
  };
  const selectFromList=(id)=>{
    let lastSelected=selectedVideo;
    let list=stateData;
    let indexToFetch=-1;
    stateData.forEach((listItem, index)=>{
      if((listItem.etag+listItem.id.videoId)==id)
        {
          indexToFetch=index;
          selectVideo(listItem);
        }
    });
    list.splice(indexToFetch,1);
    list.push(lastSelected);
  }
  useEffect(()=>{
    makeCall("");
  },[]);
  const showPage=(data, video)=>{
    if(data.length>0 && (video!=null))
    return (
      <div className='content'>
          <div className='searched'>
              <Player selectedVideo={video}/>
          </div>
          <div className='recommended'>
              <RelatedList data={stateData} selectvideo={selectFromList} selectVideo={selectFromList}/>
          </div>
      </div>
    );
  }
  return (
    <div className="App">
      <SearchBar  makeSearch={makeCall}/>
      {showPage(stateData, selectedVideo)}
    </div>
  );
}

export default App;
