import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes';

export default ()=>{
    return (
        <Menu style={{marginTop:'10px'}}>
            <Link route='/'>
                <a className='item'>Crowdconin</a>
            </Link>
            <Menu.Menu>
                <Link route='/'>
                    <a className='item'>Campaign</a>
                </Link>
                <Link route='/campaingn/new'>
                    <a className='item'></a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};