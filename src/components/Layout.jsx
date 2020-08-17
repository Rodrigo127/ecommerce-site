import React, { Fragment } from 'react';
import NavConnected from './NavConnected';
import SEO from './SEO';

export default (props) => {
    return(
        <Fragment>
            <SEO />
            <NavConnected />
            <main className="max-w-4xl mx-auto">{ props.children }</main>
        </Fragment>
    )
}