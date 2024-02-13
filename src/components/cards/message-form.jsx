import { serviceData } from "../../assets/service-card-data"
import '../../styles/mess-form.css'
// this is the code for the message form

function Form(){
    return(
        <form>
            <div className="user-info">
                <input type="text"  placeholder="name" required/>
                <input type="text"  placeholder="mobile" required/>
                <input type="text"  placeholder="email ID" required/>
                <input type="text"  placeholder="company name" required/>
                <input type="text"  placeholder="location" required/>
                <input type="text"  placeholder="how did you hear about us" required/>
            </div>
            <select name="" id="" >
                <option value="not" default>How can we help you? (Select option)</option>
                {
                    serviceData.map(cont =>(
                        <option value={cont.title} key={cont.title} >{cont.title}</option>
                    ))
                }
            </select>
            <textarea name="" id="" cols="30" rows="2" placeholder="describe your requirement"></textarea>
            <button type="button" className="cta-btn" disabled >submit</button>
        </form>
    )
}

export default Form