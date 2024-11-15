import styled from "styled-components";

export const StyledProgressiveImage = styled.img<{ isLoading: boolean }>`
    filter: none;

    ${({ isLoading }) => isLoading && 'filter: blur(8px);'}
`