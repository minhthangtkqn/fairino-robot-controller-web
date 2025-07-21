import React from "react";
import styled from "styled-components";

export const SecondaryPanelInfo = {
    name: 'task' as const,
};

const StyledSecondaryPanel = styled.div`
    height: 100%;
    overflow-y: auto;

    padding: var(--spacing-sm) var(--spacing);
    background-color: white;
    border: var(--bd);
    border-radius: var(--br);
`;

export const SecondaryPanel: React.FC = () => {
    return (
        <StyledSecondaryPanel className="boilerplate-secondary-panel">
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
            <div>Secondary</div>
        </StyledSecondaryPanel>
    );
};
