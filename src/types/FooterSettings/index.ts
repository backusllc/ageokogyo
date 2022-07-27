import { defaultNormalFooterProps, NormalFooterSettings } from './NormalFooterSettings';

export type FooterOgType = 'normalFooter';

export type FooterSettings =
    | NormalFooterSettings

export interface FooterDesignSettings {
    selectedOgType: FooterOgType;
    settings: {
        normalFooter: NormalFooterSettings;
    };
}

export const defaultFooterSettings: FooterDesignSettings = {
    selectedOgType: 'normalFooter',
    settings: {
        normalFooter: { footerType: 'normalFooter', props: defaultNormalFooterProps },
    },
};
