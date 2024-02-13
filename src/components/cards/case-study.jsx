function Case({img, title, link, content}){
    return(
        <div>
            <img src={img} alt={`${title} image`} />
            <div>
                <h3 className="nain-header">
                    {title}
                </h3>
                <p className="body-text">{content}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="outlined-btn"></a>
            </div>
        </div>
    )
}

export default Case