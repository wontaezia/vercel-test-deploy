import React from 'react';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
