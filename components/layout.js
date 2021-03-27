import Link from 'next/link';
function Layout({children}){
    return(
        <div style={{backgroundColor:"red"}}>
            <nav>
                <Link href='/about'>About</Link>
            </nav>
            {children}
        </div>
    )
}


export default Layout;