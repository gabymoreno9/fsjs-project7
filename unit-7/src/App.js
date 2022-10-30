import {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import logo from './logo.svg'
import './index.css'
import Nav from './Nav'
import SearchBox from './SearchBox'
import PhotoGrid from './PhotoGrid'
import apikey from './config.js'

const navTopics = {
  'cats': 'Cats',
  'dogs': 'Dogs',
  'computers': 'Computers',
}

function loadSearchResults(tag) {
  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${tag}&format=json&nojsoncallback=1`

  // this fetch returns a promise with the response code 
  // then we get a new promise with the json data
  // then we get a third promise with the actual array of photos
  return fetch(url)
    .then(response => response.json())
    .then(data => data.photos.photo)
}

function App() {
  let [searchResults, setSearchResults] = useState({})
  let navigate = useNavigate()
  let params = useParams()

  function search(topic) {
    // If we already have search results for this topic, we don't search again
    if (!searchResults[topic]) {
      loadSearchResults(topic).then(data => {
        setSearchResults(currentResults =>
          ({...currentResults, [topic]: data}))
      })
    }
  }

  // When the page first loads, fetch the photos for the three nav topics
  useEffect(() => {
    for(let topic in navTopics) {
      search(topic)
    }
    if (params.topic) {
      search(params.topic)
    }
  }, [])

  // Load the photos for whatever the user types in the search bar
  function handleSearch(topic) {
    navigate(`/topics/${topic}`)
    search(topic)
  }

  return (
    <div className="container">
      <SearchBox onSubmit={handleSearch} />
      <Nav topics={navTopics} />
      <div className="photo-container">
        <h2>Results</h2>
        <PhotoGrid photos={searchResults[params.topic]} />
      </div>
    </div>
  );
}

export default App;
