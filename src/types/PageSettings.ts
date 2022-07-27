import { defaultHeaderSettings, HeaderDesignSettings, HeaderSettings } from "./HeaderSettings/index";
import { defaultTopSettings, TopDesignSettings, TopSettings } from "./TopSettings/index";
import { defaultContentSettings, ContentDesignSettings, ContentSettings } from "./ContentSettings/index";
import { defaultFooterSettings, FooterDesignSettings, FooterSettings } from "./FooterSettings/index";

export interface PageDesignSettings {
    pageKey: string; //url をキーとして使うなら不要か？
    subUrl: string;
    header: HeaderDesignSettings;
    top: TopDesignSettings;
    content: ContentDesignSettings;
    footer: FooterDesignSettings;
}

export interface PageRuntimeSettings {
    pageKey: string; //url をキーとして使うなら不要か？
    subUrl: string;
    header: HeaderSettings;
    top: TopSettings;
    content: ContentSettings;
    footer: FooterSettings;
}

export const pageSettingsToRuntime = (design: PageDesignSettings): PageRuntimeSettings => {
    const top = design.top.settings[design.top.selectedOgType];
    const header = design.header.settings[design.header.selectedOgType];
    const content = design.content.settings[design.content.selectedOgType];
    const footer = design.footer.settings[design.footer.selectedOgType];

    return {
        pageKey: design.pageKey,
        subUrl: design.subUrl,
        header: header,
        top: top,
        content: content,
        footer: footer,
    };
};

export const defaultPageSettings: PageDesignSettings = {
    pageKey: '',
    subUrl: '',
    header: defaultHeaderSettings,
    top: defaultTopSettings,
    content: defaultContentSettings,
    footer: defaultFooterSettings,
};
