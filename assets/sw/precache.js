/* global __PRECACHE_MANIFEST__ */

import {PrecacheController} from 'workbox-precaching/PrecacheController.mjs';
import {cacheNames} from './caches.js';


const pc = new PrecacheController(cacheNames.SHELL);

export const init = () => {
  pc.addToCacheList(__PRECACHE_MANIFEST__);
};

export const install = (opts) => pc.install(opts);
export const activate = (opts) => pc.activate(opts);
