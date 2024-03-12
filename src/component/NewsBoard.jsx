import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import ErrorLogo from '../assets/pngwing.com.png';

const STATUS = Object.freeze({
    LOADING: "loading",
    IDLE: "idle",
    ERROR: "error"
})

const NewsBoard = ({category}) => {
    const [article, setArticle] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    
    useEffect(()=>{
        setStatus(STATUS.LOADING);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        axios.get(url).then((res)=>{setArticle(res.data.articles); setStatus(STATUS.IDLE)}).catch((err)=>{console.log(err); setStatus(STATUS.ERROR)});
    },[category])
    
  return (
    <>
    <h2 className='text-center mt-3'>Latest <span className='badge bg-danger'>News</span></h2>
    <div className='news-board d-flex justify-content-center flex-wrap'>
        {
            status === STATUS.LOADING ? (<div className="spinner-border text-primary" role="status" style={{position:"absolute", top:"50%", left:"50%", width:"4rem", height:"4rem"}}>
            <span className="visually-hidden">Loading...</span>
            </div>) :
            status === STATUS.ERROR ? (
            <div className='d-flex flex-column align-items-center' style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
              <img src={ErrorLogo} alt="" style={{width:"100px"}}/>
              <h1 className='text-center'>Opps!<br/>Something went wrong</h1>
            </div>):
            article.map((item, index)=>{
                return <NewsItem key={index} articleData={item}/>
            })
        }
    </div>
    </>
  )
}

export default NewsBoard