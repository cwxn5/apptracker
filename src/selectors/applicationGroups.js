export const getDefaultApplicationGroup = applicationGroups => {
    for (const applicationGroup in applicationGroups) {
        if (applicationGroup.default) {
            return applicationGroup.name
        }
    }
};