function Card(props) {
    return(
            <div className="card col-3">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">${props.cost}</p>
                    <a href="#" className="btn btn-primary">Buy Now!!</a>
                </div>
            </div>
        
    )
}

export default Card;