import React, { Component } from 'react'

const Newsitem =(props)=>{
    let { tittle, description, urlToImage, url ,author,date,source} = props;
    return (
      <div>

        <div className="card d-flex justify-content-evenly align-items-center" style={{
          width:
            "18rem"
        }
        } >
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{zIndex:"1",left:"90%"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <span className="badge text-bg-success">New</span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By   <b>{(author)?author:"unknown"}</b>  on  <b>{new Date(date).toGMTString()}</b></small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
