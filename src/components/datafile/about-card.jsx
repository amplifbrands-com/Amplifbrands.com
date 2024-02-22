import "../../styles/about.css"

function Card({image, name, position, about}){
    return(
        <li className='about-expert-card'>
            <div className='about-expert-card-image-outer'>
                <img src={image} alt={`${name} image`} width={100} height={100} className="about-expert-card-image"/>
            </div>
            <div className="about-expert-card-heading mb-4">
                <h4 className="about-expert-card-h4">{name}</h4>
                <span className="about-expert-card-span" >{position}</span>
            </div>
            <div className="about-expert-card-para">
                <p className="about-expert-card-p">{about}</p>
            </div>
        </li>
    )
}
export default Card;