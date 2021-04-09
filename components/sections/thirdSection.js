import style from '../../styles/Inside.module.scss'
export default function InsideSection() {
    return (
        <section className={style.inside}>
            <div className={style.sectionhead}>
                <h3>WATER <span>COMPOSITION</span></h3>
                <p>What is Inside ?</p>
            </div>
            <div className={style.sectionmain}>
                <div>
                    <ul>
                        <li>
                            <h4>Calcium Ca2+</h4>
                            <span>240 mg/L</span>
                            <p>| About 99% of the calcium in our bodies is in our bones and teeth.</p>
                        </li>
                        <li>
                            <h4>Sodium Na+</h4>
                            <span>5.2 mg/L</span>
                            <p>| It’s an important component for proper muscle and nerve function.</p>
                        </li>
                        <li>
                            <h4>Nitrate NO3-</h4>
                            <span>4.4 mg/L</span>
                            <p>| It’s great for health to drink water with levels of nitrate under 10 mg/L</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="https://wavio.peerduck.com/wp-content/uploads/2020/11/kisspng-distilled-water-bottled-water-gallon-carbonated-single-1-540x1024.png" alt="water-collom" />
                </div>
                <div>
                    <ul>
                        <li>
                            <h4>Magnesium Mg2+</h4>
                            <span>42 mg/L</span>
                            <p>| Magnesium is a nutrient that the body needs to stay healthy.</p>
                        </li>
                        <li>
                            <h4>Sulfate SO4(2-)</h4>
                            <span> 400 mg/L</span>
                            <p>| Sulfate is among the most important macronutrients in cells.</p></li>
                        <li>
                            <h4>Bicarbonate</h4>
                            <span>384 mg/L</span>
                            <p>| Bicarbonate is an antacid used to relieve heartburn and acid indigestion.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}