import style from '../../styles/Card.module.scss'
import SectionButton from "../attributs/button";
import Link from 'next/link'
import slugify from 'slugify'

export default function ProductCard({product}){
    return(
        <div className={style.cardMain}>
            <div>
                <img src={product.url} alt={product.name} />
            </div>
            <div>
                <h2>{product.name}</h2>
                <h3>{product.price} USD</h3>
            </div>
            <SectionButton><Link href='/products/[slugs]' as={`/products/${product.id}`}>Buy Now</Link></SectionButton>
        </div>
    )
}