import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: ${props => props.isFilter ? "block" : "none"};
`