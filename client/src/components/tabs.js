import React, {Component} from 'react';

// npm install --save react-tabs
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

class TabsElem extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList className="tab-buttons">
                        <Tab className="tab-button" selectedClassName="tab-button-active">Lorem 1</Tab>
                        <Tab className="tab-button" selectedClassName="tab-button-active">Lorem 2</Tab>
                    </TabList>

                    <TabPanel
                        className="tab-content info-block"
                        selectedClassName="tab-content-active">
                        <h3>Lorem 1 title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae quisquam
                            magni iste reiciendis facilis? Cupiditate beatae minima excepturi dolor.
                            Perferendis ab illo eligendi facere sapiente earum voluptas excepturi, neque
                            numquam iure corporis necessitatibus doloribus nihil odit, eum reprehenderit
                            enim recusandae ipsam magnam pariatur libero?</p>
                    </TabPanel>
                    <TabPanel
                        className="tab-content info-block"
                        selectedClassName="tab-content-active">
                        <h3>Lorem 2 title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae quisquam
                            magni iste reiciendis facilis? Cupiditate beatae minima excepturi dolor.
                            Perferendis ab illo eligendi facere sapiente earum voluptas excepturi</p>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default TabsElem;