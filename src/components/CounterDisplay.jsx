import React from "react";
import styled from "styled-components";

const CounterText = styled.h1`
    font-size: 2rem;
`;

const CounterDisplay = function CounterDisplay({ count }) {
    return (
        <CounterText>
            {(count === 0 && "You haven't clicked the button yet") ||
                (count === 1 && "You clicked the button once") ||
                `You clicked the button ${count} times`}
        </CounterText>
    );
};

export default CounterDisplay;
