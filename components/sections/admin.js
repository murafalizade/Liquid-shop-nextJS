import style from '../../styles/dashboard.module.scss';
export default function AdminDashborad() {
    return (
        <div className={style.maindashboard}>
            <div className={style.sidebar}>
                <ul>
                    <li className={style.navbrand}>
                        <span>Liquid Shop</span>
                        <hr />
                    </li>
                    <li><span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width='35px' height='35px'
                            version="1.1" viewBox="0 0 64 64">
                            <g><g id="Icon-Plus" transform="translate(28.000000, 278.000000)"><path className="st0" d="M4-222.1c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9s23.9,10.7,23.9,23.9     C27.9-232.8,17.2-222.1,4-222.1L4-222.1z M4-267.3c-11.7,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3     S15.7-267.3,4-267.3L4-267.3z" id="Fill-38" /><polygon className="st0" id="Fill-39" points="-8.7,-247.4 16.7,-247.4 16.7,-244.6 -8.7,-244.6    " /><polygon className="st0" id="Fill-40" points="2.6,-258.7 5.4,-258.7 5.4,-233.3 2.6,-233.3    " />
                            </g></g></svg></span> Add</li>
                    <li><span>
                        <svg xmlns="http://www.w3.org/2000/svg"  height="25px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="25px" ><circle cx="25" cy="25" fill="none" r="24" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><rect fill="none" height="50" width="50"/><path d="M29.933,35.528  c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/></svg>
                        </span> Users</li>
                    <li> Products</li>
                    <li> Assets</li>
                    <li>Settings</li>
                    <li> Log Out</li>
                </ul>
            </div>
            <div className={style.mainbar}>hkjh</div>
        </div>
    )

}