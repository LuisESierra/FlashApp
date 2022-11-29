import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import NavBarV2 from '../Components/NavBarV2';
import React from "react";

import { ScreenHome } from "./ScreenHome";
import { ScreenAddStore } from './ScreenAddStore';
import {ScreenDesktop} from './ScreenDesktop';
import {ScreenFood} from './ScreenFood';
import {ScreenStoreFeedback} from './ScreenStoreFeedback';
import {ScreenStoreHome} from './ScreenStoreHome';
import {ScreenSupport} from './ScreenSupport';
import { ScreenLogin } from './ScreenLogin';
import {ScreenAddProducts} from './ScreenAddProduct';

export const MainApp = () => {
    return (
        <>
            <div className='navbar'>
                <NavBarV2></NavBarV2>
            </div>
            <NavLink className={(args) => ` ${args.isActive ? 'active' : ''} `}
                to="/"
            >
                Home </NavLink>

            <Button variant="dark"><Link to="ScreenHome"> ScreenHome</Link></Button>
            <Button variant="dark"><Link to="ScreenLogin"> ScreenLogin</Link></Button>
            <Button variant="dark"><Link to="ScreenDesktop"> ScreenDesktop</Link></Button>
            <Button variant="dark"><Link to="ScreenFood"> ScreenFood</Link></Button>
            <Button variant="dark"><Link to="ScreenAddStore"> ScreenAddStore</Link></Button>
            <Button variant="dark"><Link to="ScreenStoreFeedback"> ScreenStoreFeedback</Link></Button>
            <Button variant="dark"><Link to="ScreenStoreHome"> ScreenStoreHome</Link></Button>
            <Button variant="dark"><Link to="ScreenAddProducts"> ScreenAddProducts</Link></Button>
            <Button variant="dark"><Link to="ScreenSupport"> ScreenSupport</Link></Button>

            <Routes>
                <Route path="ScreenHome" exact element={<ScreenHome />} />
                <Route path="ScreenLogin" exact element={<ScreenLogin />} />
                <Route path="ScreenDesktop" exact element={<ScreenDesktop />} />
                <Route path="ScreenFood" exact element={<ScreenFood />} />
                <Route path="ScreenAddStore" exact element={<ScreenAddStore />} />
                <Route path="ScreenStoreFeedback" exact element={<ScreenStoreFeedback />} />
                <Route path="ScreenStoreHome" exact element={<ScreenStoreHome />} />
                <Route path="ScreenAddProducts" exact element={<ScreenAddProducts />} />
                <Route path="ScreenSupport" exact element={<ScreenSupport />} />
            </Routes>

        </>
    )
}