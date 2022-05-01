import { fireEvent, render, screen, within } from '@testing-library/react';
import Menu from './menu';
import MenuItem from './menuItem';
import { MenuProps } from './types';

const setup = (props: MenuProps) => {
  render(
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <MenuItem index={8}>index test</MenuItem>
    </Menu>
  );
};

const defaultProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'testMenu',
};

const verticalProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
};

describe('test Menu and MenuItem component', () => {
  it('should render correct Menu and MenuItem based on default props', () => {
    setup(defaultProps);

    const menuElement = screen.getByRole('menu');
    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');

    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu testMenu');
    const menuItems = within(menuElement).getAllByRole('menuitem');
    expect(menuItems.length).toEqual(4);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });

  it('click items should change active and call the right callback', () => {
    setup(defaultProps);

    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');
    const thirdElement = screen.getByText('xyz');
    const lastElement = screen.getByText('index test');

    fireEvent.click(thirdElement);
    expect(thirdElement).toHaveClass('menu-item is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(defaultProps.onSelect).toHaveBeenCalledWith(2);

    fireEvent.click(disabledElement);
    expect(disabledElement).toHaveClass('menu-item is-disabled');
    expect(disabledElement).not.toHaveClass('is-active');
    expect(defaultProps.onSelect).not.toHaveBeenCalledWith(1);

    fireEvent.click(lastElement);
    expect(lastElement).toHaveClass('menu-item is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(defaultProps.onSelect).toHaveBeenCalledWith(8);
  });

  it('should render vertical mode when mode is set to vertical', () => {
    setup(verticalProps);

    const menuElement = screen.getByRole('menu');
    expect(menuElement).toHaveClass('menu menu-vertical');
  });
});
