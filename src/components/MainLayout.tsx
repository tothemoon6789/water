import { Link, Outlet } from "react-router-dom";

export default function MainLayout (){
    return (
        <>
                <ul>
                    <li>

                    <Link  to={'basic-layout'}>Basic layout</Link>
                    </li>
                    <li>

                    <Link  to={'f-layout'}>F layout</Link>
                    </li>
                </ul>
                <div>
                    <Outlet/>
                </div>
        </>
    )
}