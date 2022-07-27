import React from 'react';
import { FooterSettings } from '../../types/FooterSettings/index';
import { OgNormalFooter } from '../organisms';

interface Props {
    settings: FooterSettings;
}

const Footer = (props: Props) => {
    const footerType = props.settings.footerType;

    switch (footerType) {
        case 'normalFooter':
            return <OgNormalFooter {...props.settings.props} />;
        default:
            throw new Error(`${footerType} の FooterFactory が未実装です。`);
    }
};

export default React.memo(Footer, (x, y) => x.settings === y.settings);
