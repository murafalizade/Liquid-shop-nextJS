import {useEffect,useState} from 'react'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard(){
    const [isLogin,setIsLogin] = useState(false)
    return (
        <div>
            {!isLogin?
                <div className='form-group' style={{width:'200px',height:'300px',position:'absolute',left:'40%',top:'25%'}}>
                    <input className="form-control d-inline-block mt-5 round" type='username' placeholder='admin' />
                    <input className="form-control d-inline-block round"  type='password' placeholder='password' />
                    <button className='btn ml-5 mt-1 btn-outline-primary'>LOG IN</button>
                </div>:
                <div>
                    welcome to dashboard
                </div>
        }
        </div>
    )
}