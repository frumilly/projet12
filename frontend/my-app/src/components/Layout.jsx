import React from 'react';
import Header from './Header';
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className={style.layoutContainer}> {/* Ajoutez une classe pour le conteneur */}
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
