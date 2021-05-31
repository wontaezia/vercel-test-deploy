import React from 'react';
import { Global } from '@emotion/react';
import Layout from '@/layout/Layout';
import globalStyles from '@/styles/global';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Global styles={globalStyles} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
