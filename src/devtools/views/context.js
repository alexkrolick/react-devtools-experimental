// @flow

import { createContext } from 'react';

import type { Bridge } from '../../types';

import Store from '../store';

export const BridgeContext = createContext<Bridge>(((null: any): Bridge));
BridgeContext.displayName = 'BridgeContext';

export const StoreContext = createContext<Store>(((null: any): Store));
StoreContext.displayName = 'StoreContext';
