import React from 'react';
import { Timeline, Events, themes, createTheme } from "@merc/react-timeline";
import { i18n } from '../../translate/i18n'

import { Dtmoney } from './projects/dtmoney/project.dtmoney';
import { Reactfolio } from './projects/reactfolio/project.reactfolio'

const customTheme = createTheme(themes.default, {
    timelineTrack: {
        backgroundColor: '#663399',
    },
    marker: {
        borderColor: 'transparent',
        backgroundColor: '#ba75ff',
        borderRadius: "25%",
    },
    date: {
        backgroundColor: '#663399',
    },
})

const ProjectTimeline = () => {
    return(
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">{i18n.t('projects.titles.app')}</h1>
            <Timeline theme={customTheme}>
                <Events>
                    {/* Project: */}
                    <Dtmoney />
                    <Reactfolio />
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline;