import React from 'react';
import { useSwipeable } from "react-swipeable";

export default function Wrapper({children, openHamburgerMenu, isToggleOpen, showMobileRegistration, showMobileRegistrationFunc}) {

    const handlers = useSwipeable({
        onSwipedRight: isToggleOpen ? () => openHamburgerMenu() : "",
        onSwipedLeft: isToggleOpen ? "": () => openHamburgerMenu()
    });

    return (
        <div {...handlers} className="wrapper" onClick={isToggleOpen ? () => openHamburgerMenu() : () => {}}>
            { children }
        </div>
    )
}
