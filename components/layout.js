import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

export default (props) => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"
                />
            </Head>
            <Header />
            {props.children}
            {/* <div className='footer' style={{'display':'flex'}, {'flex-direction': 'column'}, {'minHeight':'100vh'}}>
                <div style={{'flex':'1'}}><hr color='grey' /></div>
                <Footer />
            </div> */}
        </Container>
    )
};