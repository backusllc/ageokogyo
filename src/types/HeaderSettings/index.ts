import { defaultFloatHeaderProps, FloatHeaderSettings } from './FloatHeaderSettings';
import { defaultNormalHeaderProps, NormalHeaderSettings } from './NormalHeaderSettings';

export type HeaderOgType = 'floatHeader' | 'normalHeader';

export type HeaderSettings =
    | FloatHeaderSettings
    | NormalHeaderSettings

export interface HeaderDesignSettings {
    selectedOgType: HeaderOgType;
    settings: {
        floatHeader: FloatHeaderSettings;
        normalHeader: NormalHeaderSettings;
    };
}

export const defaultHeaderSettings: HeaderDesignSettings = {
    selectedOgType: 'normalHeader',
    settings: {
        floatHeader: { headerType: 'floatHeader', props: defaultFloatHeaderProps },
        normalHeader: { headerType: 'normalHeader', props: defaultNormalHeaderProps },
    },
};
