import logo from './logo.svg';
import './index.css';
import SearchBox from './SearchBox'
import Nav from './Nav'
import Photo from './Photo'
import NotFound from './NotFound'

function App() {
  return (
    <div className="container">
      <SearchBox />
      <Nav />
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo url="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" />
          <Photo url="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" />
          <Photo url="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" />
          <Photo url="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" />
          <NotFound />
        </ul>
      </div>
    </div>
  );
}

export default App;
