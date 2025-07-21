import './boilerplate.scss';
import { PrimaryPanel } from "./primary-panel";
import { SecondaryPanel } from "./secondary-panel";
import { BaseLayout } from "@/__lib__/layout";

export const BoilerplateAppInfo = {
    name: 'boilerplate' as const,
};

export const BoilerplateApp = () => {
    return (
        <BaseLayout
            PrimaryComponent={PrimaryPanel}
            SecondaryComponent={SecondaryPanel}
            className="boilerplate-app-layout"
        />
    );
};
