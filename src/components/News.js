import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async newsUpadate() {
     this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.props.setProgress(50);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
     this.props.setProgress(100);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
  }
  async componentDidMount() {
    this.newsUpadate();
  }

  // nextPage = async () => {
    //   this.setState({
  //     page: this.state.page + 1,
  //   });
  // };
   
  loadFunc = async()=>{
     this.props.setProgress(10);
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
     this.setState({page: this.state.page+1})
     this.props.setProgress(50);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
     this.props.setProgress(100);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    
  }
  // pervPage = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  // };
  
  render() {
    return (
      <>
      <div style={{textAlign:"center"}}>
        <h2>News By Shayan</h2>
        {this.state.loading && <Spinner />}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.loadFunc}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          >
            <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "none"}
                    description={
                      element.description ? element.description : "none"
                    }
                    url={element.url ? element.url : "none"}
                    urlToImage={element.urlToImage ? element.urlToImage : ""}
                  />
                </div>
              );
            })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
