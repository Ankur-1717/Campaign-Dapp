import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{'position':'bottom'}}>
            <Link route='https://github.com/Ankur-1717'>
                <a className='item'> <img src='../images/github.svg' alt='' /> </a>
            </Link>
        </Menu>
    )
}