import Layout from '../../components/layout'
import axios from 'axios'
import style from '../../styles/slug.module.scss'
import { useState } from 'react'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductBuy({ product }) {
    const item = product[0]

    const sumbitUser = async (userDetail) => {
       const data = await axios.post('http://localhost:3001/api/userDetail',userDetail)
        console.log(userDetail);
        alert('Your Product sending . . .');
        window.location.reload();
    }


    const [user, setUser] = useState({
        fname: "",
        sname: "",
        city: "",
        product_id: item.id,
        count: 1,
        email: "",
        number: "",
        address: ""
    })
    return (
        <Layout>
            <div style={{ display: 'flex', marginLeft: '100px' }}>
                <div className={style.productDetail}>
                    <h1>
                        Product Details:
                    </h1>
                    <h2>{item.name}</h2>
                    <div className={style.imageDetail}>
                        <img src={item.url} alt={item.name} />
                    </div>
                    <div>
                        <h3><span onClick={() => { user.count != 1 ? setUser({ ...user, count: user.count - 1 }) : null }}> - </span>Count: {user.count} <span onClick={() => setUser({ ...user, count: user.count + 1 })}> + </span></h3>
                        <p>{item.price * user.count} USD</p>
                    </div>
                </div>
                <div style={{ marginTop: '100px' }} className="col-10 col-md-5 ">
                    <div className="formm">
                        <p><small>All input must completed</small> </p>
                        <form className="form">
                            <input type="name" value={user.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} className="form-control d-inline-block round" placeholder="First Name" required />
                            <input type="name" value={user.sname} onChange={(e) => setUser({ ...user, sname: e.target.value })} className="form-control d-inline-block" placeholder="Last Name" required />
                        </form>
                        <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control mb-3 d-block" placeholder="Email" />
                        <input type="number" value={user.number} onChange={(e) => setUser({ ...user, number: e.target.value })} className="form-control mb-3 d-block" placeholder="Number" required />
                        <input type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} className="form-control mb-3 d-block" id="psw" placeholder="City" required />
                        <textarea value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} className="form-control mb-3 d-block" placeholder="Address" required />
                        <button type="button" onClick={() => sumbitUser(user)} className="btn btn-outline-primary btn-block">Send</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slugs: 'fGr4syIXIy' } },
            { params: { slugs: 'QMUP9CS4Bc' } },
            { params: { slugs: '9VpReOoop' } }
        ], fallback: false
    };
}


export async function getStaticProps({ params }) {
    console.log(params.slugs)
    const datas = await axios.get(`http://localhost:3001/api/${params.slugs}`)
    const product = datas.data
    return {
        props: { product }
    }
}