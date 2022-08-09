import React from 'react';
import { Link } from 'gatsby';
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
            <div style={{ backgroundColor: "#E6E6E6", paddingTop: '1rem', paddingBottom: '1rem' }}>
                <div className={`${termDiv} inner`} style={{ maxWidth: "864px", margin: '0 auto', height: '100%' }}>
                    <div>
                        <Link style={{ fontSize: '1rem' }} className="termLink" to="/notification">利用規約</Link>
                    </div>
                    <div>
                        <Link style={{ fontSize: '1rem' }} className="termLink" to="/privacy">個人情報保護方針</Link>
                    </div>
                    <div>
                        <Link style={{ fontSize: '1rem' }} className="termLink" to="/tokushohou">特定商取引法に基づく表記</Link>
                    </div>
                    <div>
                        <Link style={{ fontSize: '1rem' }} className="termLink" to="/refund">返金ポリシー</Link>
                    </div>
                    <div>
                        <Link style={{ fontSize: '1rem' }} className="termLink" to="/shipping">配送ポリシー</Link>
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
