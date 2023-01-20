import React from 'react';
import Button from 'src/components/Button/Button';
import { useTelegram } from '../hooks/useTelegram';


const Header = () => {
    const {user, onClose} = useTelegram();


    return (
        <div className={'header'}>
            <Button onClick={onClose}>Жабу1</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;