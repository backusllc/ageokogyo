import React from 'react';
import type { FC } from 'react';
import { OgNavigation } from '../../Navigations/OgNavigation'
import { inner, header } from './index.css'
import { AtLogo } from '../../../atoms/Logos'

export const OgEvHeader: FC = () => {

  return <>
    <header className={header}>
      <div className={inner}>
        <AtLogo />
        <div>
          <OgNavigation />
        </div>
      </div >
    </header >
  </>
};
