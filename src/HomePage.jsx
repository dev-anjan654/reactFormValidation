import React, { useState }  from 'react';
import Navbar from './component/Navbar';
import NewsBoard from './component/NewsBoard';

const HomePage = () => {
    const [category, setCategory] = useState("general");
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </>
  )
}

export default HomePage