import styled from "styled-components";

export const AppContainer = styled.div`
    font-family: 'Geist';
    display: flex;
    position: relative;
    padding: 3rem;
    box-sizing: border-box;

    @media (max-width: 1023px) {
        padding: 4% 5%;
    }
`

export const MainContentContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-inline: auto;
    margin-top: 2rem;
    width: 50rem;
    box-sizing: border-box;

    @media (max-width: 1023px) {
        width: 100%;
        margin-top: 1rem;
    }
`
