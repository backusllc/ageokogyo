import React from 'react';
import { Page } from '../components/factories/Page';
import { ProvideAuth } from '../hooks/useAuth';
import { defaultPageSettings, PageDesignSettings, pageSettingsToRuntime } from '../types/PageSettings';
import { CommonSettings } from '../types/SiteSettings';

import config from '../utils/awsAuth'
import { Amplify } from 'aws-amplify'
Amplify.configure({
  ...config,
})

export default function Home() {

  const commonSettings: CommonSettings = {
    header: {
      headerKey: '',
    },
  };

  const pageDesignSettings: PageDesignSettings = defaultPageSettings;
  const pageRuntimeSettings = pageSettingsToRuntime(pageDesignSettings);

  return (
    <ProvideAuth>
      <Page commonSettings={commonSettings} pageSettings={pageRuntimeSettings} />;
    </ProvideAuth>
  )
}
