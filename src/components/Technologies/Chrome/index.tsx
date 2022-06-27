import styled from "styled-components";

import { IStyleComponent } from "../../Generics/interface";
import ChromeBody from "./ChromeBody";
import ChromeHeader from "./ChromeHeader";
import TabProvider from "./context/useChromeTab";


const Chrome = ({ className } : IStyleComponent) => {
    return (
        <div className={className}>
            <TabProvider>
                <ChromeHeader />
                <ChromeBody />
            </TabProvider>
            <img>
            </img>
            <div>
            <ChromeLogo>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><linearGradient id="b" x1="55.41" x2="12.11" y1="96.87" y2="21.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1e8e3e"/><stop offset="1" stop-color="#34a853"/></linearGradient><linearGradient id="c" x1="42.7" x2="86" y1="100" y2="25.13" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fcc934"/><stop offset="1" stop-color="#fbbc04"/></linearGradient><linearGradient id="a" x1="6.7" x2="93.29" y1="31.25" y2="31.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d93025"/><stop offset="1" stop-color="#ea4335"/></linearGradient><path fill="url(#a)" d="M93.29 25a50 50 90 0 0-86.6 0l3 54z"/><path fill="url(#b)" d="M28.35 62.5 6.7 25A50 50 90 0 0 50 100l49-50z"/><path fill="url(#c)" d="M71.65 62.5 50 100a50 50 90 0 0 43.29-75H50z"/><path fill="#fff" d="M50 75a25 25 90 1 0 0-50 25 25 90 0 0 0 50z"/><path fill="#1a73e8" d="M50 69.8a19.8 19.8 90 1 0 0-39.6 19.8 19.8 90 0 0 0 39.6z"/></svg>
            </ChromeLogo>
            </div>
        </div>
    )
}

export default styled(Chrome)`
    width: min(95vw, 70rem);
    height: min(80vh, 50rem);
    background: #ffffff;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.2) 0px 17px 10px 0px;
    position: relative;
`;

const ChromeLogo = styled.div`
    position: absolute;
    bottom: 0;
    left: 1rem;
    width: 5rem;
`
