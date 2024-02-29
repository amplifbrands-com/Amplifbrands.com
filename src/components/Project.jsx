import React from 'react';
import "../styles/project.css"
import Whatsapp from './Whatsapp';
import ScrollToTopButton from './ScrollToTopButton';
import { useParams } from 'react-router-dom';
import {projects} from "../assets/portfolio-page-data";
import { Link } from 'react-router-dom';


const Project = ({theme}) => {
    const { projectId } = useParams();
    const parsedProjectId = parseInt(projectId, 10);
    const data = projects.find(item => item.id === parsedProjectId);

    return (
            <div className="project--container" >
        <Whatsapp/>
       
                <div className="project--header">
                        <h1>{data.name}</h1>
                </div>
                <div className="main--image">
                    <div className="background">
                    </div>
                    <img src={data.mainImage} alt="" />

                </div>
                <section >
                    <div className="row my-5">
                    {data.serviceCategory.map(item => (
                        <div className="col">
                            <img src={ theme==='light'? item.icon.light: item.icon.dark} alt="" />
                            <p >{item.category}</p>
                        </div>
                    ))}
                    </div>
                    <div>
                        <p>{data.description}</p>
                        <Link to={data.websiteLink} className="cta-btn-2">visit website</Link>
                    </div>
                    <div className="image--container">
                       <img src={data.image1} alt="" />
                       <img src={data.image2} alt="" />
                    </div>
                    {/* youtube part will be embedded later */}
                   <div className="btn--group">

                    <Link to={`/portfolio/${parsedProjectId - 1}`} className="cta-btn">Previous Project</Link>

                    <Link to={`/portfolio/${parsedProjectId + 1}`}  className="cta-btn">Next Project</Link>
                   </div>
                </section>
      <ScrollToTopButton/>

            </div>
        )
}

export default Project;