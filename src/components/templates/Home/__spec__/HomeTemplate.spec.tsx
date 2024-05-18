import { render } from '@testing-library/react-native';

import { HomeContext } from '../../../../application/contexts/home/home.context';
import { HomeTemplate } from '../HomeTemplate';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: jest.fn((str: string) => str),
    };
  },
}));

describe('Given <HomeTemplate/>', () => {
  const setup = () =>
    render(
      <HomeContext.Provider value={{}}>
        <HomeTemplate />
      </HomeContext.Provider>
    );

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HomeTemplate-View');
    });
  });
});
