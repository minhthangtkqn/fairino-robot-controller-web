import { BoilerplateApp, BoilerplateAppInfo } from "./boilerplate";
import { useApplicationKey } from "@/util";

export const BaseApplication = () => {
    const { applicationKey = BoilerplateAppInfo.name } = useApplicationKey();

    switch (applicationKey) {
        case BoilerplateAppInfo.name:
            return <BoilerplateApp />;
        default:
            return <BoilerplateApp />;
    }
};

export const ApplicationInfo = {
    BoilerplateAppInfo,
};
