import Board from "../components/board";
import Layout from '../components/layout';
import style from '../styles/About.module.scss'

function About(){
    return(
        <Layout>
        <div className={style.body}>
            <a href='/'>Home Page</a>
            this is a about
            <Board value={45} />
        </div>
        <div className={style.main}>
                <a href="/hello">everything will be okey</a> 
        </div>
        </Layout>

    )
}

export default About;