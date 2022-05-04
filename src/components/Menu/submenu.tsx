import classNames from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  FunctionComponentElement,
  MouseEvent,
  useContext,
  useState,
} from 'react';
import Icon from '../Icon/icon';
import Transition from '../Transition';
import { TEST_ID } from './constants';
import { MenuContenxt } from './menu';
import { MenuItemProps, SubMenuProps } from './types';

const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContenxt);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened: boolean =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });
  let timer: any;
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: (e: MouseEvent) => {
            e.preventDefault();
            setOpen(!menuOpen);
          },
        }
      : {};
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classNames('menu-submenu', {
      'is-opened': menuOpen,
    });
    const childElement = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const {
        type: { displayName },
        props,
      } = childElement;

      if (displayName === 'MenuItem') {
        return cloneElement(childElement, {
          index: `${index}-${props.index || i}`,
        });
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component'
        );
      }
    });

    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul
          className={subMenuClasses}
          data-testid={`${TEST_ID.SUBMENU}-${index}`}
        >
          {childElement}
        </ul>
      </Transition>
    );
  };

  return (
    <li
      className={classes}
      key={index}
      {...hoverEvents}
      data-testid={`${TEST_ID.MENUITEM}-${index}`}
    >
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
