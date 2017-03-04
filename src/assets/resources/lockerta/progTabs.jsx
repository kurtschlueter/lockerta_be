import React from 'react';

import InformationTabContainer from '../../../components/ProgramDetail/InformationTab/InformationTabContainer.jsx'; //eslint-disable-line import/extensions
import SchedulingTabContainer from '../../../components/SchoolDetail/SchedulingTab/SchedulingTabContainer.jsx';
import ProgramReviewsTabContainer from '../../../components/ProgramDetail/ProgramReviewsTab/ProgramReviewsTabContainer.jsx'; //eslint-disable-line import/extensions

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
        label: 'Reviews',
        tabIndex: 1,
        generateComponent(props) {
            return <ProgramReviewsTabContainer {...props} />;
        }
    }
];