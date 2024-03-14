import React from 'react';
import "../styles/project.css"
import { useParams } from 'react-router-dom';
import {projects} from "../assets/portfolio-page-data";
import { Link } from 'react-router-dom';


const Project = ({theme}) => {
    const { projectId } = useParams();
    const parsedProjectId = parseInt(projectId, 10);
    const data = projects.find(item => item.id === parsedProjectId);

    return (
            <div className="project--container" >
                <div className="project--header">
                        <h1>{data.name}</h1>
                </div>
                <div className="main--image">
                    <div className="background">
                    </div>
                    <img src={data.mainImage} alt={data.name} />

                </div>
                <section >
                    <div className="row my-5 project--category">
                    {data.serviceCategory.map((item,index) => (
                        <div className="col d-flex flex-column align-items-center"  key={index}>
                            <img src={ theme==='light'? item.icon.light: item.icon.dark} alt={item.category} />
                            <h4 className="mt-2">{item.category}</h4>
                        </div>
                    ))}
                    </div>
                    <div className="project--detail">
                        <h5>{data.description}</h5>
                        <div className="d-flex justify-content-center mt-5 ">
                        <Link to={data.websiteLink} className="cta-btn-2">visit website</Link>
                        </div>
                      
                    </div>
                    <div className="image--container">
                       <img src={data.image1} alt={data.name} className="img-fluid" />
                       <img src={data.image2} alt={data.name} className="img-fluid" />
                    </div>
                  
                    <div className="d-flex justify-content-center">
                    <iframe
                    className="youtube"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                    ></iframe>
                    </div>
                   
                   <div className="btn--group">

                    <Link to={`/portfolio/${parsedProjectId - 1}`} className="cta-btn">Previous Project</Link>

                    <Link to={`/portfolio/${parsedProjectId + 1}`}  className="cta-btn">Next Project</Link>
                   </div>
                </section>

            </div>
        )
}

export default Project;