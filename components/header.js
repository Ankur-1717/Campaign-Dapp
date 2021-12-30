import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ 'marginTop':'10px' }}>
            <Link route='/'>
                <a className='item'>CrowdCoin</a>
            </Link>
            <Menu.Menu position='right'>
                <Link route='/'>
                    <a className='item'>Campaigns</a>
                </Link>
                <Link route='campaigns/new'>
                    <a className='item'>+</a>
                </Link>
            </Menu.Menu>
            <Menu.Menu style={{'fontWeight':'600'}}>
                <Link route='https://github.com/Ankur-1717/Campaign-Dapp'>
                    <a className='item'>GITHUB</a>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}