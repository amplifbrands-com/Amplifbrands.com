import "../../styles/about.css"

function Card({image, name, position, about}){
    return(
        <li className='about-expert-card'>
            <div className='about-expert-card-image-outer'>
                <img src={image} alt={`${name} image`} width={100} height={100} className="about-expert-card-image"/>
            </div>
            <div className="about-expert-card-heading mb-4">
                <h6 className="about-expert-card-h6">{name}</h6>
                <p className="about-expert-card-span" >{position}</p>
            </div>
            {/* <div className="about-expert-card-para">
                <p className="about-expert-card-p">{about}</p>
            </div> */}
        </li>
    )
}
export default Card;