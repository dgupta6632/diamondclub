const Carousels = () => {
    return (<>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.whitsundayescape.com/wp-content/uploads/2018/02/4-girls-funny-pose-deck-Lady-L-banner.jpeg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://previews.123rf.com/images/andersonrise/andersonrise1507/andersonrise150700422/41956815-collage-women-portrait-in-full-growth-beautiful-models-in-black-lingerie-blonde-and-brunette-front.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://st3.depositphotos.com/1000689/14432/i/1600/depositphotos_144328129-stock-photo-collection-of-women-on-colored.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>)
}

export default Carousels