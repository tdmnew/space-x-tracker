import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
  href: string;
  className?: string;
};

const Link: FC<PropsWithChildren<LinkProps>> = ({ href, className, children }) => (
  <RouterLink to={href} className={classNames('text-blue-500 hover:text-blue-400', className)}>
    {children}
  </RouterLink>
);

export default Link;
