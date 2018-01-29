import styled from "styled-components";

const View = styled.div`
    // Phone
    @media only screen and (min-width: 320px) {
        width: 90%;
    }

    // Tablet
    @media only screen and (min-width: 768px) {
        width: 70%;
    }

    // Desktop
    @media only screen and (min-width: 980px) {
        width: 50%;
    }

    margin: auto;
`;

export default View;
