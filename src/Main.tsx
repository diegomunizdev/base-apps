import './application/lang/i18n';

import { LayoutProvider } from './components/providers/Layout/Layout.provider';
import PACKAGE_JSON from '../package.json';
import { Routes } from './components/views/Routes';

const Main = () => {
  console.info('base-app', '\x1b[32m' + `v${PACKAGE_JSON.version}`);

  return (
    <LayoutProvider>
      <Routes />
    </LayoutProvider>
  );
};

export default Main;
