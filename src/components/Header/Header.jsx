import React from 'react';
import Button from 'src/components/Button/Button';


const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
      }
    return {
        <div className={'header'}>
            <Button>Жабу1</Button>
            <span className={'username'}></span>
        </div>
    };
};

export default Header;