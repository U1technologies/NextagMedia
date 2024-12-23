import React from "react";
import Link from "next/link";

export const ROUTE_CONTACT_US = '/contact'
export const BTN_CONTACT_US = 'Contact'

const Button = ({text = BTN_CONTACT_US, link = ROUTE_CONTACT_US}) => {
    return ( 
        <Link href={link}>
          <button className="primary-button">
            {text}
          </button>
        </Link>
    );
}
 
export default Button;