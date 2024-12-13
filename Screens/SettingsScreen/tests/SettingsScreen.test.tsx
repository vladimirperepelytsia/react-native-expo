import SettingsScreen from '../SettingsScreen';

import { render } from '@/__tests__/test-utils';
import { testIdSettingPage } from '@/constants/TestId';

describe('<SettingsScreen />', () => {
  test('should render component SettingsScreen', () => {
    const tree = render(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render component SettingsScreen with text', () => {
    const { getByTestId } = render(<SettingsScreen />);
    getByTestId(testIdSettingPage);
  });
});
