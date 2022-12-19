import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        console.log("Hello I am a constructor from news component")
        this.state = {
            articles: [],
            loading : false
        }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=babab43e1a1945848d97a4ca3ee6a3a0";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }


  render() {
    return (
      <div className="container my-3">
        <h2>NewsUpdate - Latest News</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return   <div className="col md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>

        })}
        
        </div>
      </div>
    )
  }
}

export default News