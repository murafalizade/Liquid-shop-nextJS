import SectionButton from "../attributs/button";
import style from '../../styles/Home.module.scss';

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
            {/* <div>
                <video autoPlay muted loop >
                    <source src="/assets/water.mp4" type="video/mp4" />
                </video>
            </div> */}
        </div>
    )
}