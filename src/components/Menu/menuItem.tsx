import { FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './types';
import { MenuContenxt } from './menu';

const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContenxt);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false,
};

export default MenuItem;
