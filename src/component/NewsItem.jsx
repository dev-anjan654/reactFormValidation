import React from 'react';
import NewsImg from '../assets/newsLogo.jpg';

const NewsItem = ({articleData}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 position-relative" style={{maxWidth: "345px", width:"19rem"}}>
      <img src={articleData.urlToImage ? articleData.urlToImage : NewsImg} className="card-img-top" alt="" style={{height:"150px"}}/>
      <div className="card-body">
        <h5 className="card-title">{articleData.title.slice(0,50)}</h5>
        <p className="card-text">{articleData.description ? articleData.description.slice(0,100):""}</p>
        <a href={articleData.url} target='_blank' className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem