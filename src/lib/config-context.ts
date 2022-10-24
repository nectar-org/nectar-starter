import React from 'react';
import type { DeepPartial } from '@utils/types';

export interface Configs {
  sidebarScrollHeight: number
  updateSidebarScrollHeight: (height: number) => void
}

export const defaultConfigs: Configs = {
    sidebarScrollHeight: 0,
    updateSidebarScrollHeight: () => {},

  }
  
  export const ConfigContext = React.createContext<Configs>(defaultConfigs)
  
  export const useConfigs = (): Configs => React.useContext(ConfigContext)