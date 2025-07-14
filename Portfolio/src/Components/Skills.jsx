import './SkillsStyle.css';

const skills = () => (
    <section className="skills">
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        SOFT SKILLS
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <li>Initiative</li>
                        <li>Leadership</li>
                        <li>Flexibility and change management</li>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        HARD SKILLS
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <li>Concern for health and quality</li>
                        <li>Self control</li>
                        <li>Customer orientation</li>
                        <li>Learning and use of knowledge</li>
                        <li>Strategic orientation</li>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        INTERESTS
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">I am very interested in new technologies because is constantly evolving, especially in fields like web application development, where innovative tools and trends continually emerge.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        LEARNING ENVIRONMENT
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <li>Foundations of Web Development: HTML, CSS, JavaScript and basic web design</li>
                        <li>Back-End Development: Java and knowledge of database as MySql</li>
                        <li>Version control: GitLab for managing code and collaboration</li>
                        <li>Code editors: Visual Studio Code</li>
                        <li>Integrated Development Environments: Eclipse</li>
                        <li>Project-Based learning: Working on actual projects</li>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default skills;