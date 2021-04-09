import Head from 'next/head';

export default function MasterPage({children}){
    return(
        <>
        <Head>
            <title>LiquidShop | Home Page</title>
            <link src='../public/favicon.ico' />
            <meta charSet="UTF-8" />
            <meta name="description" content="Deliver website for order water" />
            <meta name="keywords" content="Water,Deliver,Shop" />
            <meta name="author" content="Muraf Alizade" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div>
            {children}
        </div>
        </>
    )
}