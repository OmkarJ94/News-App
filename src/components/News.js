import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import "./card.css"
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
      }-News`;
  }
  handlePrev = async () => {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=In&category=${this.props.category
      }&apiKey=384017d71a494c3abca6f4ce08f38e8a&page=${this.state.page - 1}&pageSize=${this.props.pageSize
      }`;
    this.props.setProgress(40);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(70);

    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1,
      totalResults: parsedata.totalResults,
      loading: false,
    });

    this.props.setProgress(100);
  };
  handleNext = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=In&category=${this.props.category
        }&apiKey=384017d71a494c3abca6f4ce08f38e8a&page=${this.state.page + 1}&pageSize=${this.props.pageSize
        }`;
      this.props.setProgress(40);
      this.setState({ loading: true });
      let data = await fetch(url);
      this.props.setProgress(70);
      let parsedata = await data.json();

      this.setState({
        articles: parsedata.articles,
        page: this.state.page + 1,
        totalResults: parsedata.totalResults,
        loading: false,
      });
      this.props.setProgress(100);
      console.log(this.state.articles)
    }
  };

  async componentDidMount() {
    this.props.setProgress(0);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=In&category=${this.props.category}&apiKey=384017d71a494c3abca6f4ce08f38e8a&page=1&pageSize=${this.props.pageSize}`;
    this.props.setProgress(40);
    let data = await fetch(url);
    console.log(data)
    let parsedata = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedata.articles, loading: false });
    console.log(this.state.articles)
    this.props.setProgress(100);
  }
  render() {
    return (
      <div className="container my-3">
        <h2 style={{ marginTop: "65px" }}>
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
          -Headlines
        </h2>
        {this.state.loading && <Spinner></Spinner>}
        <hr></hr>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url} >
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={
                      element.description ? element.description : " "
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  ></Newsitem>
                </div>
              );
            })}
          <div className="container d-flex justify-content-between">
            <button
              style={{ marginTop: "50px" }}
              disabled={this.state.page <= 1}
              className="btn btn-dark mx-3"
              onClick={this.handlePrev}
            >
              ←Previous
            </button>
            <button
              style={{ marginTop: "50px" }}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next→
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
