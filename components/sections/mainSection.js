import ProductCard from "../attributs/productCard";

 function MainProduct() {
     const products = [
         {
             id: 'fGr4syIXIy',
             name: 'One big bottle of mineral water ',
             url: 'https://wavio.peerduck.com/wp-content/uploads/2020/11/1-2-water-bottle-free-png-image-water-pro-1-160x277.png',
             price: 19.97
         }, {
             id: 'QMUP9CS4Bc',
             name: 'Three bottles of mineral water',
             url: 'https://wavio.peerduck.com/wp-content/uploads/2020/11/kisspng-water-filter-water-cooler-bottled-treem-1-160x132.png',
             price: 13.25
         },
         {
             id: "9VpReOoop",
             name: 'Small bottles of mineral water',
             url: 'https://wavio.peerduck.com/wp-content/uploads/2020/11/pngwave-1-160x124.png',
             price: 17.93
         }]
    return (
        <main>
            
            <style jsx>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap');
                main{
                    margin-left:100px;
                    width:75%;
                    height:80%;
                    margin-bottom:100px;
                }
                div{
                    margin-left:150px;
                    display:flex;
                    flex-direction:row;
                    justify-content:start;
                }
                h2{
                    font-family: "Dosis", arial, sans-serif;
                    font-size:55px;
                    text-align:center;
                    margin-left:100px;
                }`}
            </style>
            <h2>Products</h2>
            <div>
                 {
                    products!==[]?
                products.map(item => (
                    <ProductCard key={item.id} product={item} />
                )):<h2>Loading . . .</h2>}</div>
        </main>
    )
}


export default MainProduct