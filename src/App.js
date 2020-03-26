import React, {Component} from 'react';
// import axios from 'axios';
import './App.css';

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import {
  Button
} from "reactstrap";

// import { Jumbotron, Button } from 'reactstrap';
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
      
      <div className="container mt-5">
        <h1 class="fake-news bg-warning"> Your favourite FAKE NEWS website</h1>
        <h1 class="trump-news">The Latest News and Top Stories of President Donald Trump</h1> 
         
        {this.state.articles.map((article) => {
            return(
    <>  
            <hr className="my-12"  />
              <MDBContainer className="mt-5 text-center  ">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center jumbotron ">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong><h2> {article.title}</h2></strong>
                <h3 className="card-description"> {article.description} </h3>
            </MDBCardTitle>

            <MDBCardImage
              src={article.urlToImage} 
              className="img-fluid"
            />

{/* <img src={article.urlToImage} style={{width:'80vw', height: '40vw'}}/> */}
            <MDBCardBody>
              
              <MDBCardText>
              <h3> Read the full story here: </h3>

              
              <div className="pt-2">
                <div class="btn btn-primary">
                  <a href={article.url}>   Take me there   </a>
                 
                </div>
                
                
              </div>

                      
              

              {/* <h4> Link:  <a href={article.url}>  {article.url} </a> </h4>    */}
                
                 <p> Published at: {article.publishedAt}</p>

              </MDBCardText>
              <MDBCardTitle className="indigo-text h5 m-4">
              <p> Source: {article.author}</p>
              </MDBCardTitle>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </>
              // <>


              //  <hr/>

             
               
              //   <h1 style={{color:'red'}}> BREAKING NEWS</h1> 
              //   <h1> <b> {article.title}</b></h1> 
              //   <h3 style={{color:'black'}}> {article.description} </h3>

              //   <img src={article.urlToImage} style={{width:'80vw', height: '40vw'}}/>
              //   <p> Source: {article.author}</p>
              //   <h3> Read the full story here: </h3>
              //   <h4> Link:  <a href={article.url}>  {article.url} </a> </h4>   
                
              //   <p> Published at: {article.publishedAt}</p>
              //   {/* <p> {article.content}</p>  */}
                
              // </>
            )})}
      </div>
  )
  }
}

export default App;


