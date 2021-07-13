import {Link} from "react-router-dom";

function Home() {
    return(
        <div className="p-5 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Book Store</h1>
                <p className="col-md-8 fs-4">If you are searching for your next reading, you are in the correct place. Click the following button, and discover more than 1000 options to buy. We also let it in your home!</p>
                <Link to="/productos" className="btn btn-primary btn-lg">BUY NOW!</Link>               
            </div>
        </div>
    )
}

export default Home;