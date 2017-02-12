import React from 'react';

import InformationTabContainer from '../../../components/ClientDetail/InformationTab/InformationTabContainer.jsx';
import SchedulingTabContainer from '../../../components/ClientDetail/SchedulingTab/SchedulingTabContainer.jsx';
import IntegrationsTabContainer from '../../../components/ClientDetail/IntegrationsTab/IntegrationsTabContainer.jsx';
import CampaignsTabContainer from '../../../components/ClientDetail/CampaignsTab/CampaignsTabContainer.jsx';

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
    },
    {
        tabID: 'campaigns',
        label: 'Campaigns',
        tabIndex: 2,
        generateComponent(props) {
            return <CampaignsTabContainer {...props} />;
        }
    }
];