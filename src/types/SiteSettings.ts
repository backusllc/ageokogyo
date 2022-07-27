import { defaultHeaderSettings, HeaderDesignSettings, HeaderSettings } from './HeaderSettings';
import {
  defaultPageSettings,
  PageDesignSettings,
  PageRuntimeSettings,
  pageSettingsToRuntime,
} from './PageSettings';

export interface SiteDesignSettings {
  commonSettings: CommonDesignSettings;
  pageSettings: PageDesignSettings[];
}

export interface SiteRuntimeSettings {
  commonSettings: CommonRuntimeSettings;
  pageSettings: PageRuntimeSettings[];
}

export interface CommonDesignSettings {
  header: HeaderDesignSettings;

}
export const defaultCommonSettings: CommonDesignSettings = {
  header: defaultHeaderSettings,
};

export interface CommonRuntimeSettings {
  header: HeaderSettings;

}

export const commonSettingsToRuntime = (design: CommonDesignSettings): CommonRuntimeSettings => {
  const header = design.header.settings[design.header.selectedOgType];
  
  return {
    header,
  }
}

export const siteSettingsToRuntime = (design: SiteDesignSettings): SiteRuntimeSettings => {
  return {
    commonSettings: commonSettingsToRuntime(design.commonSettings),
    pageSettings: design.pageSettings.map(pageSettingsToRuntime),
  };
};

export const defaultSiteSettings: SiteDesignSettings = {
  commonSettings: defaultCommonSettings,
  pageSettings: [defaultPageSettings],
};
