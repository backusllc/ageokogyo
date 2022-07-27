import React from 'react';
import { ContentSettings } from '../../types/ContentSettings/index';
import { OgBanner, OgMoveImageSection, OgTableLayoutSection, OgThreeLineTextSection, OgTileSection, OgTwoDevidedSection } from '../organisms';

interface Props {
    settings: ContentSettings;
}

const Content = (props: Props) => {
    const contentType = props.settings.contentType;

    switch (contentType) {
        case 'banner':
            return <OgBanner {...props.settings.props} />;
        case 'moveImage':
            return <OgMoveImageSection {...props.settings.props} />;
        case 'tableLayout':
            return <OgTableLayoutSection {...props.settings.props} />;
        case 'threeLineText':
            return <OgThreeLineTextSection {...props.settings.props} />;
        case 'tile':
            return <OgTileSection {...props.settings.props} />;
        case 'twoDevided':
            return <OgTwoDevidedSection {...props.settings.props} />;
        default:
            throw new Error(`${contentType} の ContentFactory が未実装です。`);
    }
};

export default React.memo(Content, (x, y) => x.settings === y.settings);
