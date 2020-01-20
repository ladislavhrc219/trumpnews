import React, {Component} from 'react';
// import axios from 'axios';
import './App.css';
// import Articles from './components/Articles.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?q=trump&apiKey=ab4415572d7c4b5885bdfd07990e1ffd')
    .then((response)=>{
      return response.json();
    })
    .then((newsAPIJson)=> {
      // console.log(myJson);
      this.setState({
        articles: newsAPIJson.articles
      })
    });
  }
   

  // console.log(articles);

  render() {
    console.log(this.state);
  return (
      // let [articles, setNewsPosts] = useState([]);
      <div className="container mt-5">
        {this.state.articles.map((article) => {
            return(
              <>
                <h1 style={{color:'red'}}> BREAKING NEWS</h1> 
                <h1> <b> {article.title}</b></h1> 
                <h2 style={{color:'orange'}}> {article.description} </h2>
                <img src={article.urlToImage} style={{width:'75vw'}}/>
                <p> Source: {article.author}</p>
                <p style={{color:'red'}}> keep reading...</p>
              </>
            )})}
      </div>
  )
  }
}

export default App;




// useEffect(() => {
//   const fetchPosts = async () => {
//     setLoading(true);
//     const articles = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ab4415572d7c4b5885bdfd07990e1ffd');
//     setNewsPosts(articles.data);
//     setLoading(false);

//   }
//   fetchPosts();

// }, []);
