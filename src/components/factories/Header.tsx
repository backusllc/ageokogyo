import React from 'react';
import { HeaderSettings } from '../../types/HeaderSettings/index';
import { OgNormalHeader, OgFloatHeader } from '../organisms';

interface Props {
    settings: HeaderSettings;
}

const Header = (props: Props) => {
    const headerType = props.settings.headerType;

    switch (headerType) {
        case 'floatHeader':
            return <OgFloatHeader {...props.settings.props} />;
        case 'normalHeader':
            return <OgNormalHeader {...props.settings.props} />;
        default:
            throw new Error(`${headerType} の HeaderFactory が未実装です。`);
    }
};

export default React.memo(Header, (x, y) => x.settings === y.settings);
