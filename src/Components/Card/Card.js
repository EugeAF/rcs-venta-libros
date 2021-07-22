function Card(props) {
    return(
            <div className="card col-4 mt-4">
                <img src={props.img} className="card-img-top w-90 mt-2" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">${props.cost}</p>
                    <a href="#" className="btn btn-primary">Buy Now!!</a>
                </div>
            </div>
        
    )
}

export default Card;