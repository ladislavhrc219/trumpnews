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

  render() {
    console.log(this.state);
  return (
      // let [articles, setNewsPosts] = useState([]);
      <div className="container mt-5">
        {this.state.articles.map((article) => {
            return(
              <>
               <hr/>
                <h1 style={{color:'red'}}> BREAKING NEWS</h1> 
                <h1> <b> {article.title}</b></h1> 
                <h3 style={{color:'black'}}> {article.description} </h3>
                <img src={article.urlToImage} style={{width:'80vw', height: '40vw'}}/>
                <p> Source: {article.author}</p>
                <h3> Read the full story here: </h3>
                <h4> Link:  <a href={article.url}>  {article.url} </a> </h4>   
                
                <p> Published at: {article.publishedAt}</p>
                {/* <p> {article.content}</p>  */}
                
              </>
            )})}
      </div>
  )
  }
}

export default App;


