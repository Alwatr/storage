import {createLogger, definePackage} from '@alwatr/logger';

declare global {
  // eslint-disable-next-line no-var
  var __package_version: string;
}

definePackage('store-reference', __package_version);

export const logger = createLogger('store-reference');
