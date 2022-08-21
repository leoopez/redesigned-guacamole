import staticInfo  from "../../../static/static.json";
import { FaGithub  } from "react-icons/fa";

const { contact } = staticInfo;

const  GITHUB_URL  = contact.links["GITHUB_URL "];

export default  () => {
    return (
        <a target='_blank' href={GITHUB_URL}>
            <FaGithub  color="#000" size="7rem" />
        </a>
    );
};
