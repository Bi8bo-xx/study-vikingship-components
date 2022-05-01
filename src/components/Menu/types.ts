import { CSSProperties, ReactNode } from 'react';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: number) => void;

interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
  children?: ReactNode;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type { MenuProps, IMenuContext, MenuItemProps };
