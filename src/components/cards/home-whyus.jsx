// this is the code for why choose us section of the home page

import '../../styles/base.css';
import '../../styles/home-whyus.css'
function WhyUs({icon, title, subtitle, content}){
    return(
        <div className='card-main-wrapper'>
            <div className='card-title'>
                <div className='icon-wrapper'>
                    <img src={icon} alt={`${title} icon`} />
                </div>
                <span>
                    <h6 className='main-header'>{title}</h6>
                    <small className='sub-header'>{subtitle}</small>
                </span>
            </div>
            <div>
                <p className="body-text">
                    {content}
                </p>
            </div>

        </div>
    )
}
export default WhyUs;