import staticInfo  from "../../../static/static.json";
import { FaGithub  } from "react-icons/fa";
import { useTheme } from "../../../context/useTheme";

const { contact } = staticInfo;

const  GITHUB_URL  = contact.links["GITHUB_URL "];

export default  () => {;
    const { theme } = useTheme();
    return (
        <a target='_blank' href={GITHUB_URL}>
            <FaGithub  color={ theme ? "#000": "#FFF" } size="7rem" />
        </a>
    );
};
