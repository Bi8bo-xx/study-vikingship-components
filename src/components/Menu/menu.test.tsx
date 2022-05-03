import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { TEST_ID } from './constants';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './submenu';
import { MenuProps } from './types';

const createStyleFile = () => {
  const cssFile: string = `
.menu-submenu {
  display: none;
}
.menu-submenu.is-opened {
  display: block;
}
`;

  const style = document.createElement('style');
  style.innerHTML = cssFile;
  document.head.appendChild(style);
};

const setup = (props: MenuProps) => {
  createStyleFile();
  render(
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <MenuItem index="8">index test</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>SubMenu 0</MenuItem>
        <MenuItem>SubMenu 1</MenuItem>
        <MenuItem>SubMenu 2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const defaultProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'testMenu',
};

const verticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
};

describe('test Menu and MenuItem component', () => {
  it('should render correct Menu and MenuItem based on default props', () => {
    setup(defaultProps);

    const menuElement = screen.getByTestId(TEST_ID.MENU);
    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');

    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu testMenu');
    const menuItems = within(menuElement).getAllByTestId(TEST_ID.MENUITEM, {
      exact: false,
    });
    expect(menuItems.length).toEqual(8);
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
    expect(defaultProps.onSelect).toHaveBeenCalledWith('2');

    fireEvent.click(disabledElement);
    expect(disabledElement).toHaveClass('menu-item is-disabled');
    expect(disabledElement).not.toHaveClass('is-active');
    expect(defaultProps.onSelect).not.toHaveBeenCalledWith('1');

    fireEvent.click(lastElement);
    expect(lastElement).toHaveClass('menu-item is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(defaultProps.onSelect).toHaveBeenCalledWith('8');
  });

  it('should render vertical mode when mode is set to vertical', () => {
    setup(verticalProps);

    const menuElement = screen.getByTestId(TEST_ID.MENU);
    expect(menuElement).toHaveClass('menu menu-vertical');
  });

  it('should show dropdown items when hover on subMenu', async () => {
    setup(defaultProps);

    const submenuElement = screen.getByTestId(TEST_ID.SUBMENU, {
      exact: false,
    });
    expect(submenuElement).not.toBeVisible();

    const dropdownElement = screen.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => {
      expect(submenuElement).toBeVisible();
    });

    const firstElement = screen.getByTestId(`${TEST_ID.MENUITEM}-4-0`);
    fireEvent.click(firstElement);
    expect(defaultProps.onSelect).toHaveBeenCalledWith('4-0');

    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      expect(submenuElement).not.toBeVisible();
    });
  });
});
