const Card = () => {
    return (
        <div className="card">
            <img src="https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Título</h5>
                <p className="card-text">Contenido dentro de la card.</p>
                <a href="#" className="btn btn-primary">Acceso</a>
            </div>
        </div>
    )
}
export default Card;