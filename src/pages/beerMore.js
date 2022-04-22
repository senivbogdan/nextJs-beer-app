import React from 'react';
import styled from "styled-components";

const BeerMore = () => {
    return (
        <div>
            <Title isStyled={true}>asd</Title>
        </div>
    );
};

const Title = styled.h1`
    font-size: 14px;
    {({p}) => p.isStyled}
`

export default BeerMore;