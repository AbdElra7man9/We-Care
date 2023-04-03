'use client';
import { FC, useState } from 'react'
import NextNProgress from 'nextjs-progressbar';
import { Router } from 'next/router';
// import NProgress from 'nprogress';

interface ProgessBarProps {

}

const ProgessBar: FC<ProgessBarProps> = ({ }) => {
    const [Loading, setLoading] = useState<Boolean>(false)
    Router.events.on("routeChangeStart", (url) => {
        console.log('started')
        setLoading(true);
    })
    Router.events.on("routeChangeComplete", (url) => {
        console.log('ended')
        setLoading(false);
    })

    // Router.events.on('routeChangeStart', () => NProgress.start());
    // Router.events.on('routeChangeComplete', () => NProgress.done());
    // Router.events.on('routeChangeError', () => NProgress.done());
    return (
        <NextNProgress />
    )

}

export default ProgessBar