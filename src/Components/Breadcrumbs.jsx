const Breadcrumbs =({Page})=>{
    return(
        <section className="breadcrumbs-custom text-left"
        style={{backgroundImage:'url(images/IMG-20210707-WA0096.jpg'}}>
        <div className="shell">
            <h2 className="breadcrumbs-custom__title">{Page}</h2>
            <ul className="breadcrumbs-custom__path">
                <li><a href="index.html">Home</a></li>
                <li className="active">{Page}</li>
            </ul>
        </div>
    </section>
    )
}
export default Breadcrumbs;