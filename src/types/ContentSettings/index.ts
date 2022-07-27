import { defaultBannerSectionProps, BannerSectionSettings } from './BannerSettings';
import { defaultMoveImageSectionProps, MoveImageSectionSettings } from './MoveImageSectionSettings';
import { defaultTableLayoutSectionProps, TableLayoutSectionSettings } from './TableLayoutSectionSettings';
import { defaultThreeLineTextSectionProps, ThreeLineTextSectionSettings } from './ThreeLineTextSectionSettings';
import { defaultTileSectionProps, TileSectionSettings } from './TileSectionSettings';
import { defaultTwoDevidedSectionProps, TwoDevidedSectionSettings } from './TwoDevidedSectionSettings';

export type ContentOgType = 'banner' | 'moveImage' | 'tableLayout' | 'threeLineText' | 'tile' | 'twoDevided';

export type ContentSettings =
    | BannerSectionSettings
    | MoveImageSectionSettings
    | TableLayoutSectionSettings
    | ThreeLineTextSectionSettings
    | TileSectionSettings
    | TwoDevidedSectionSettings

export interface ContentDesignSettings {
    selectedOgType: ContentOgType;
    settings: {
        banner: BannerSectionSettings;
        moveImage: MoveImageSectionSettings;
        tableLayout: TableLayoutSectionSettings;
        threeLineText: ThreeLineTextSectionSettings;
        tile: TileSectionSettings;
        twoDevided: TwoDevidedSectionSettings;
    };
}

export const defaultContentSettings: ContentDesignSettings = {
    selectedOgType: 'banner',
    settings: {
        banner: { contentType: 'banner', props: defaultBannerSectionProps },
        moveImage: { contentType: 'moveImage', props: defaultMoveImageSectionProps },
        tableLayout: { contentType: 'tableLayout', props: defaultTableLayoutSectionProps },
        threeLineText: { contentType: 'threeLineText', props: defaultThreeLineTextSectionProps },
        tile: { contentType: 'tile', props: defaultTileSectionProps },
        twoDevided: { contentType: 'twoDevided', props: defaultTwoDevidedSectionProps },
    },
};
