import Head from 'next/head';

export default function SEO({ title = 'default Title', keywords = 'keyword test', desc = 'description test' }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={desc} />
            {/* <meta name="og:title" property="og:title" content={props.title} />
            <meta name="og:description" property="og:description" content={props.desc} />
            <meta property="og:url" content={`${props.canonical}`} />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.desc} />
            {props.image ? <meta property="og:image" content={`${props.image}`} /> : <meta property="og:image" content="default image url" />}
            {props.image ? <meta name="twitter:image" content={`${props.image}`} /> : <meta name="twitter:image" content="default image url" />} */}
        </Head>
    );
}
