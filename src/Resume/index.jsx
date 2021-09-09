import './resume.css'

function Home() {
    return (
      <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Sammy Njau</h4>
              <p><em>Innovative and self driven Software Engineer with 3+ years of experience designing and developing user-centered software systems.</em></p>
              <ul>
                <li>Nairobi City,Nairobi, Kenya</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor of Mathematics and computer science</h4>
              <h5>2015 - 2016</h5>
              <p><em>Kenyatta University, Nairobi, Kenya</em></p>
              <p></p>
            </div>
            <div class="resume-item">
              <h4>IBM Cloud Associate</h4>
              <h5>2017</h5>
              <p><em>Kenyata University and IBM training programe</em></p>
              <p>Perticpated in training programe that was offered by IBM to Kenyata University Students, The program involved intensive 
                training on cloud platforms.
              </p>
            </div>
            <h3 class="resume-title">VOLUNTARY WORK</h3>
            <div class="resume-item pb-0">
              <h4>SHOWMAN CODE MENTORSHIP</h4>
              <h5>October 2020 — Present</h5>
              <p><em>Offer code mentorship to new developer by code review and unblocking on code issues</em></p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Software Development Engineer</h4>
              <h5>October 2019 — Present</h5>
              <p><em>Microsoft via Techno Brain Group, Nairobi</em></p>
              <ul>
                <li>Create User interface and Api's for multiple critical projects from the scratch</li>
                <li>Identify areas that need improvement and suggest tasks to Team Lead. </li>
                <li>Support Users and attend to live site issues.</li>
                <li>Design and develop reusable code across the project</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Software Engineer</h4>
              <h5>November 2018 — September 2019</h5>
              <p><em>Andela, Nairobi</em></p>
              <ul>
                <li>Design and develop reusable code across multiple project</li>
                <li>Implement UI Design provided by the product manager</li>
                <li>Create user backend Apis to be reusable in multiple projects</li>
                <li>Recommended and consult with team on how to tackle tasks</li>
                <li>Mentor new software engineers joining Andela</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
  }
  
  export default Home;