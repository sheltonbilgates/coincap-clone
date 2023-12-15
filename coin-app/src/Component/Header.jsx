import React from "react";
import "../Styles/header.css";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <ul className="one">
            <li>Coins</li>
            <li>Exchanges</li>
            <li>Swap</li>
          </ul>
          <ul className="two">
            <li>
              <img
                src="https://coincap.io/static/logos/black.svg"
                alt="Coinapp"
              />
            </li>
          </ul>
          <ul>
            <li>
              <select id="currency">
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="UAH">UAH</option>
                <option value="UGX">UGX</option>
              </select>
            </li>
            <li>
              <select id="language">
                <option value="Eng">English</option>
                <option value="Dan">Dansk</option>
                <option value="Tam">Tamil</option>
                <option value="Hin">Hindi</option>
              </select>
            </li>
            <li>
              <span class="material-symbols-outlined">search</span>
            </li>
            <li>
              <span class="material-symbols-outlined">settings</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
