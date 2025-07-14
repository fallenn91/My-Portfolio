import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const contact = () => (
    <section className="contact" id = "contact">
        <h3>Contact</h3>
        <p>
            <FaEnvelope className = "icon" />nuriafeng03@gmail.com
        </p>
        <p>
            <FaLinkedin className = "icon"/><a href="https://www.linkedin.com/in/núria-feng-almendros-gonzález-1110521a6/" target="_blank">LinkedIn</a></p>
        <p>
            <FaGithub className = "icon"/><a href="https://github.com/fallenn91?tab=repositories" target="_blank">GitHub</a></p>
    </section>
);

export default contact;