import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

enum ButtonSize {
  Large = 'lg',
  Small = 'small',
}

enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export { ButtonSize, ButtonType };
export type { ButtonProps };
