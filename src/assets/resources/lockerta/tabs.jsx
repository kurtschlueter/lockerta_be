import React from 'react';

import InformationTabContainer from '../../../components/SchoolDetail/InformationTab/InformationTabContainer.jsx'; //eslint-disable-line import/extensions
import SchedulingTabContainer from '../../../components/SchoolDetail/SchedulingTab/SchedulingTabContainer.jsx';
import IntegrationsTabContainer from '../../../components/SchoolDetail/IntegrationsTab/IntegrationsTabContainer.jsx'; //eslint-disable-line import/extensions

export const tabs = [
    {
        tabID: 'information',
        label: 'Information',
        tabIndex: 0,
        generateComponent(props) {
            return <InformationTabContainer {...props} />;
        }
    },
    {
        tabID: 'integrations',
        label: 'Programs',
        tabIndex: 1,
        generateComponent(props) {
            return <IntegrationsTabContainer {...props} />;
        }
    }
];