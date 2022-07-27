import React from 'react';
import { sprinkles } from '../../../styles/sprinkles.css';
import { footer } from './Footer.css'

const Footer = () => {

    const termDiv = sprinkles({
        display: {
            mobile: 'block',
            tablet: 'flex',
            desktop: 'flex',
        },
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10',
    })
    const thisYear = new Date().getFullYear();

    return (
        <footer className={footer}>
            <div style={{ backgroundColor: "#E6E6E6", height: '60px' }}>
                <div className={`${termDiv} inner`} style={{ maxWidth: "864px", margin: '0 auto', height: '100%' }}>
                    <div>
                        <a style={{ fontSize: '1rem' }} className="termLink" href="/tokushohou">特商法</a>
                    </div>
                    <div>
                        <a style={{ fontSize: '1rem' }} className="termLink" href="/notification">当サイトご利用にあたって</a>
                    </div>
                    <div>
                        <a style={{ fontSize: '1rem' }} className="termLink" href="/privacy">個人情報保護方針</a>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: "#555555", color: "#fff", height: '30px', display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div>{`${thisYear} ©Ageokogyo all rights reserved`}</div>
            </div>
        </footer >
    );
};

export default Footer;
