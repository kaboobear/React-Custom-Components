import React, {Component} from 'react';

// npm install --save react-accessible-accordion
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';

class AccordionElem extends Component {
    render() {
        return (
            <div>
                <Accordion
                    className="accordion"
                    allowMultipleExpanded={true}
                    allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-button">
                                Lorem1
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="info-block accordion-content">
                            <p>
                                <h3>Lorem 2 title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae quisquam
                                    magni iste reiciendis facilis? Cupiditate beatae minima excepturi dolor.
                                    Perferendis ab illo eligendi facere sapiente earum voluptas excepturi, neque
                                    numquam iure corporis necessitatibus doloribus nihil odit, eum reprehenderit
                                    enim recusandae ipsam magnam pariatur libero?</p>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-button">
                                Lorem2
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="info-block  accordion-content">
                            <p>
                                <h3>Lorem 2 title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae quisquam
                                    magni iste reiciendis facilis? Cupiditate beatae minima excepturi dolor.
                                    Perferendis ab illo eligendi facere sapiente earum voluptas excepturi, neque
                                    numquam iure corporis necessitatibus doloribus nihil odit, eum reprehenderit
                                    enim recusandae ipsam magnam pariatur libero?</p>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        )
    }
}

export default AccordionElem
