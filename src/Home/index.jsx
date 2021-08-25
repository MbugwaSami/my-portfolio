import './home.css'

function Home() {
    return (
        <section id="home" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Sammy Njau</h1>
          <p>I'm a Software Engineer</p>
          <div className="social-links">
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-github"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;