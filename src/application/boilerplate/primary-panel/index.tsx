import React from 'react';
import styled from "styled-components";

export const PrimaryPanelInfo = {
    name: 'timer' as const,
};

const StyledPrimaryPanel = styled.div`
    height: 100%;
    overflow-y: auto;

    padding: var(--spacing-sm) var(--spacing);
    background-color: white;
    border: var(--bd);
    border-radius: var(--br);
`;

export const PrimaryPanel: React.FC = () => {
    return (
        <StyledPrimaryPanel className="boilerplate-primary-panel">
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
            <div>Primary</div>
        </StyledPrimaryPanel>
    );
};
