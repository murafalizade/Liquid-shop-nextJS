import {useEffect,useState} from 'react'
import AdminDashborad from '../components/sections/admin'
import axios from 'axios'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard({ customerData})
{
    const [isLogin,setIsLogin] = useState(false)
    return (
        <div>
            {!isLogin?
                <div className='form-group' style={{width:'250px',height:'300px',padding:'5px',position:'absolute',left:'40%',top:'25%'}}>
                    <input className="form-control d-inline-block mt-5 round" type='username' placeholder='admin' />
                    <input className="form-control d-inline-block round"  type='password' placeholder='password' />
                    <button className='btn  text-center mt-1 btn-block btn-outline-primary'>LOG IN</button>
                </div>:
                <div>
                    <AdminDashborad />
                </div>
                
        }
        </div>
    )
}



export async function getStaticProps(){
    const customers = await axios.get('http://localhost:3001/api/dashboard')
    const customerData = customers.data;
    return {
        props:{customerData}
    }
}
