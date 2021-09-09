import './about.css'
import profile from '../imgs/profile.jpg'

function Home() {
    return (
      <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>I'm a Proactive and highly focused individual positioned to offer optimum solutions to full-stack software development in a professional manner.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Software Engineer</h3>
            <p className="fst-italic">
              Design and develop Web, Mobile and Desktop systems that makes people lives simple.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 Nov 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+254724532498</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nairobi, Kenya</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>samimbugwa@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
  }
  
  export default Home;