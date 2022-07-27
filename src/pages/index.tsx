import React from 'react';
import { Page } from '../components/factories/Page';
import { defaultPageSettings, PageDesignSettings, pageSettingsToRuntime } from '../types/PageSettings';
import { CommonSettings } from '../types/SiteSettings';

export default function Home() {

  const commonSettings: CommonSettings = {
    header: {
      headerKey: '',
    },
  };

  const pageDesignSettings: PageDesignSettings = defaultPageSettings;
  const pageRuntimeSettings = pageSettingsToRuntime(pageDesignSettings);

  return (
    <Page commonSettings={commonSettings} pageSettings={pageRuntimeSettings} />
  )
}
