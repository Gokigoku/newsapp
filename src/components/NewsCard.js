import React,{ Component } from "react";


export default function NewsCard(props){


    return (
        <div className="container">
       <br></br>
    <div className="row">
       <div class="card" style={{width: "18rem"}}>
        <img src={props.imageurl} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.discription}</p>
            <a href={props.url} class="btn btn-primary" target="_blank">Read</a>
        </div>
    </div>
    </div>
    <br></br>
    </div>
    );
}