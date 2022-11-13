import staticInfo from '../../../static/static.json';
import { FaLinkedin } from 'react-icons/fa';

const { contact } = staticInfo;

const { LINKEDIN_URL } = contact.links;

export default () => {
  return (
    <a target="_blank" href={LINKEDIN_URL}>
      <FaLinkedin color="#0073B1" size="7rem" />
    </a>
  );
};
