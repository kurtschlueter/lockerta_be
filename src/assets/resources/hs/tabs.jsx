import React from 'react';

import InformationTabContainer from '../../../components/ClientDetail/InformationTab/InformationTabContainer.jsx'; //eslint-disable-line import/extensions
import SchedulingTabContainer from '../../../components/ClientDetail/SchedulingTab/SchedulingTabContainer.jsx';
import IntegrationsTabContainer from '../../../components/ClientDetail/IntegrationsTab/IntegrationsTabContainer.jsx'; //eslint-disable-line import/extensions

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
        label: 'Integrations',
        tabIndex: 1,
        generateComponent(props) {
            return <IntegrationsTabContainer {...props} />;
        }
    }
];