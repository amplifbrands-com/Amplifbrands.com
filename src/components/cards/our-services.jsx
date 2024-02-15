import '../../styles/base.css'
import '../../styles/servi-card.css'
function ServiCard({icon, title, content}){
    return(
        <div className="card-wrapper">
            <div>
                <h6 className="main-header ">
                    {title}
                </h6>
                <p className="body-text">{content}</p>
            </div>
            <button type="button" className="text-btn">read more...</button>
            <div className="icon">
                <img src={icon} alt={`${title} icon`} />
            </div>
        </div>
    )
}

export default ServiCard;