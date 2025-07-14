import './AboutStyle.css';

const about = () => (
    <section className="about">
        <div className="container">
            <h2 className = "section-title">About me</h2>
            <p className="intro">
                I'm a current student that has the objective to achieve a professional, continuous learning and growth career. This site serves as a platform to showcase my expertise, achievements, and career journey. Feel free to explore and learn more about me.
            </p>
            <div className="experience">
                <h2>Professional Experience</h2>
                <h3>Web Development Student | 2024 - Present</h3>
                <p className = "institution">Institut Escola del Treball - Barcelona</p>    
                <p>As a student my objective and aspirations are to complete the degree and became a professional web developer. The most important thing is acquire professional experience and learn the different programming languages such as HTML, Java, JavaScript and different frameworks. Other more skills in testing, debugging, and optimizing web applications for performance.</p>
            </div>
            <div className="further-studies">
                <h3>Further studies</h3>
                <h4>Possible continations include</h4>
                <ul>
                    <li>Advanced studies in specialized fields such as mobile application development, cloud computing, or artificial intelligence.</li>
                    <li>Certifications in specific technologies, frameworks, or tools (e.g., React, AWS, Docker).</li>
                    <li>Higher education options, such as a bachelor's or master's degree in computer science, software engineering, or information technology.</li>
                    <li>Participation in coding boot camps and workshops to stay updated with the latest industry trends.</li>
                    <li>Opportunities to specialize in roles such as front-end developer, back-end developer, full-stack developer, UX/UI designer, or web security expert.</li>
                </ul>
            </div>
        </div>
    </section>
);

export default about;