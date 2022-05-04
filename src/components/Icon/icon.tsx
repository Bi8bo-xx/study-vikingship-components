import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC } from 'react';
import { IconProps } from './types';

const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
