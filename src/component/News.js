import { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News=(props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(false)
  const[page,setpage]=useState(1)
  const[totalResult,settotalResult]=useState(0)

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles);
      setLoading(false);
      settotalResult(parsedData.totalResults);
    };
  
    fetchData();
  }, []);
  

   const handleprevbtn=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page -1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setpage(page-1);
    // this.setState({ articles: parsedData.articles, loading: false 
    //   ,page:this.state.page-1
    // }
    // )
  }
 const handlenextbtn= async()=>{
  if(page+1>Math.ceil(totalResult/6))
  {

  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pageSize=${props.pageSize}`;
    setLoading(true);
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles);
    setLoading(false);
    setpage(page+1);
  // this.setState({ articles: parsedData.articles, loading: false 
  //   ,page:this.state.page+1
  // }
  // )
}
}
    return (
      <>
        <h1 className="monkey my-5" style={{ textAlign: "center"}}>NewsMonkey - Today's Top Headlines</h1>
       {loading && <Spinner/>}
        <div className='row my-5 mx-5' style={{ justifyContent: "center", alignItems: "center" }}>
          {!(loading) && articles.map((element) => { 
            return (
              <div className="col-md-4 my-5" key={element.url}>
                <Newsitem
                  tittle={(element.title || "").slice(0, 68)}
                  description={(element.description || "").slice(0, 90)}
                  urlToImage={element.urlToImage?element.urlToImage:""}
                  url={element.url?`https://www.bloomberg.com/news/articles/2025-04-14/lvmh-sales-fall-as-shoppers-curb-spending-on-louis-vuitton-bags`:element.url}
                  author={element.author?element.author:""}
                  date={element.publishedAt?element.publishedAt:""}
                  source={element.source.name?element.source.name:""}
                />
              </div>
            )
          })}
          <div className="d-flex justify-content-around">
          <button disabled={page<=1} type="button" class="btn btn-dark" onClick={handleprevbtn}>&#8249; Previous</button>
          <button  disabled={page+1>Math.ceil(totalResult/6)}type="button" class="btn btn-dark" onClick={handlenextbtn}>Next &#8250;</button>
          </div>
        </div>
      </>
    )
  }

 News.defaultProps={
  country:'us',
  category:'science'
   }
   News.propTypes={
     country:PropTypes.string,
     category:PropTypes.string,
     pageSize:PropTypes.number
 
   }
export default News
