import React from 'react';

const Articles = ({articles, loading}) => {
    // const articles = [];
    // const data =[];
    if (loading) {
        return <h2> Loading... </h2>;
    }
  return( 
        // <ul className="list-group mb-4">
        //     {articles.map((article, index) =>(
        //         <li key=""> 
        //             {article && article.articles.title}
        //         </li>
        //         ))}
        // </ul>
        <div> 
            {articles && <p>{articles.author} </p> }
        </div>
      
  );
};

export default Articles;
