import "../styles/components/socialLink.css"

function SocialLink() {
  return (
    <section className="socialLink">
      <div className="container">
        <div className="card">
         
          <div className="card-image">
            <img src="avatar-jessica.jpeg" alt="avatar" />
          </div>
          
          <div className="card-header">
            <h5 className="title">Jessica Randall</h5>
            <h6 className="sub-title">London, United Kingdom</h6>
          </div>
          
          <div className="card-body">
            <p className="text">"Front-end developer and avid reader."</p>
          </div>

          <div className="card-footer">
            <button className="button" type="button">GitHub</button>
            <button className="button" type="button">Frontend Mentor</button>
            <button className="button" type="button">LinkedIn</button>
            <button className="button" type="button">Twitter</button>
            <button className="button" type="button">Instagram</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialLink;