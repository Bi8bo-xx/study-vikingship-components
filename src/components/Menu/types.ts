import { CSSProperties, FC, ReactNode } from 'react';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: string) => void;

interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
  children?: ReactNode;
  defaultOpenSubMenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: ReactNode;
}

type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};

export type {
  MenuProps,
  IMenuContext,
  MenuItemProps,
  SubMenuProps,
  IMenuComponent,
};
