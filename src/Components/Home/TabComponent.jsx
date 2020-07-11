import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabPopDestination from './tabs_nav/TabPopDestination';
import TabPopLandmark from './tabs_nav/TabPopLandmark';
import TabPopPackage from './tabs_nav/TabPopPackage';
import TabPopReview from './tabs_nav/TabPopReview';

import PopularDestination from './Populardestination';
import PopularHotel from './Popularhotel';
import PopularLandmark from './PopularLandmark';
import PopularPackage from './PopularPackage';
import ComingSoon from './ComingSoon';
import Testimoni from './Testimoni';
import HotelStep from'./HotelStep';
import SearchStep from'./SearchStep';
import hotelBg from '../../assets/Glcmp-1.jpeg';
import destBg from '../../assets/Baluran.jpg';
import './TabComponent.css';

class TabComponent extends Component {
    state = {
        tabIndex: 0,
        imgBackground:hotelBg
    }
    changeBackground(){
        if(this.state.tabIndex!==0){
            this.setState({imgBackground:hotelBg})
        }
    }
    handleSelectIndex(tabIndex){
        this.setState({ tabIndex:tabIndex })
        if(tabIndex===0){
            this.setState({imgBackground:hotelBg})
        }else{
            this.setState({imgBackground:destBg})
        }
    }
    render() {
        return (
            <div >
                <Tabs className="tabs" style={{background: `radial-gradient(rgba(0,0,0,0), rgba(0,0,0,2)),url(" ${this.state.imgBackground} ") center center/cover` }}
                    selectedIndex={this.state.tabIndex}
                    onSelect={tabIndex => this.handleSelectIndex(tabIndex)}>
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
                        {/* <Tab className={`${this.state.tabIndex === 3 ? 'tab-selected active' : null}`}>
                            <TabPopReview />
                        </Tab> */}
                    </TabList>
                    <TabPanel>
                        <SearchStep />
                    </TabPanel>
                    <TabPanel>
                        <PopularPackage />
                    </TabPanel>
                    <TabPanel>
                        <ComingSoon />
                    </TabPanel>
                    {/* <TabPanel>
                        <Testimoni />
                    </TabPanel> */}
                </Tabs>
            </div>
        );
    }
}

export default TabComponent;