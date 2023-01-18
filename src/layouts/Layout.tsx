import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import classes from './../assets/styles/Layout.module.css';

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className={classes.Main}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;