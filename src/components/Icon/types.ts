import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

export type { IconProps, ThemeProps };
