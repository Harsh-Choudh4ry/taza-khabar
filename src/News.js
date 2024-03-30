import { Link } from "react-router-dom"

export default function News(props) {
    console.log(props)
    return (

        <div className="card news">
            <img src={props.article.urlToImage} className="card-img-top img-fluid" alt="" />
            <div className="card-body">
                <h6 className="card-title">{props.article.title}</h6>
                <p className="card-text">{props.article.description?.substring(0,200).concat("...")} <Link to={props.article.url} target="_blank" className="link link-opacity-75-hover">Read More</Link></p>
                
                <div className="source">
                    <p>Author: {props.article.author} </p>
                    <p>{props.article.source.name}</p>
                </div>
            </div>
        </div>

    )
}