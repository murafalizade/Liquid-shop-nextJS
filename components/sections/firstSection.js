import SectionButton from "../attributs/button";
import style from '../../styles/Home.module.scss';
import ReactPlayer from "react-player";

export default function NavSection() {
    return (
        <div className={style.overlay}>
            <div className={style.brand}>
                <h3><span>Liquid</span> Shop</h3>
                <SectionButton active={false}>
                    Let's Start
                </SectionButton>
                <SectionButton active={true}>
                    Products
                </SectionButton>
            </div>
            <div >
                <ReactPlayer width={1200}
                    playerVars={{ start: 33 }}
                    height={640}
                    className={style.videoBackground}
                    url='/assets/water.mp4'
                    muted={true}
                    playing={true}
                    loop={true} />
            </div>
        </div>
    )
}