import styled from "styled-components";

export const AppContainer = styled.div`
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: flex;
    position: relative;
    padding: 3rem;
    box-sizing: border-box;

    @media (min-width: 1024px) and (max-width: 1144px) {
        padding: 4% 10%;
    }

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

    @media (max-width: 1144px) {
        width: 100%;
        margin-top: 1rem;
    }
`
