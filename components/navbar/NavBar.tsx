import React from "react";

import Container from "../Container";

const NavBar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>Dat Phan</Container>
            </div>
        </div>
    );
};

export default NavBar;
