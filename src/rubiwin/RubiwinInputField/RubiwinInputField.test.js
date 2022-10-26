import renderer from 'react-test-renderer';
import RubiwinInputField from './RubiwinInputField';
import MailIcon from '../../icons/Rubiwin/EmailIcon';

const testProps = {
  className: 'test',
  id: 'id',
  name: 'name',
  onChange: () => '',
  placeholder: 'placeholder',
  inputProps: { maxLength: 20 },
  type: 'text',
  value: 'rubiwin',
  onClick: () => ''
};

/** Snapshots */
it('renders correctly props object', () => {
  const tree = renderer.create(<RubiwinInputField {...testProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('is disabled', () => {
  const tree = renderer.create(<RubiwinInputField disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has error state', () => {
  const tree = renderer.create(<RubiwinInputField error />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('is full-width', () => {
  const tree = renderer.create(<RubiwinInputField fullWidth />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has an input element added', () => {
  const tree = renderer
    .create(<RubiwinInputField inputProps={{ maxLength: 20 }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('is multiline, has 5 rows and 6 max rows', () => {
  const tree = renderer
    .create(<RubiwinInputField rows={5} rowsMax={6} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('is readOnly', () => {
  const tree = renderer.create(<RubiwinInputField readOnly />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('is required', () => {
  const tree = renderer.create(<RubiwinInputField required />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has a start and end adornment', () => {
  const tree = renderer
    .create(
      <RubiwinInputField
        startAdornment={<MailIcon />}
        endAdornment={<MailIcon />}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
