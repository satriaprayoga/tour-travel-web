import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabPopDestination from './tabs_nav/TabPopDestination';
import TabPopLandmark from './tabs_nav/TabPopLandmark';
import TabPopPackage from './tabs_nav/TabPopPackage';
import TabPopReview from './tabs_nav/TabPopReview';

import PopularDestination from './Populardestination';
import PopularLandmark from './PopularLandmark';
import PopularPackage from './PopularPackage';
import Testimoni from './Testimoni';

import './TabComponent.css';

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs"
                    selectedIndex={this.state.tabIndex}
                    onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tabs-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabPopDestination className="tabs-box"/>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabPopLandmark />
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabPopPackage />
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 3 ? 'tab-selected active' : null}`}>
                            <TabPopReview />
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <PopularDestination />
                    </TabPanel>
                    <TabPanel>
                        <PopularLandmark />
                    </TabPanel>
                    <TabPanel>
                        <PopularPackage />
                    </TabPanel>
                    <TabPanel>
                        <Testimoni />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default TabComponent;