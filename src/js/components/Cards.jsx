const Card = ({img, title, description}) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top img" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Acceso</a>
            </div>
        </div>
    )
}
export default Card;