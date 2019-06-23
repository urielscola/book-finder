import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
  desktop: '(min-width: 992px)',
  tablet: '(min-width: 768px)',
  phone: '(max-width: 767px)',
};

const Breakpoint = props => (
  <MediaQuery {...props} query={breakpoints[props.name] || breakpoints.desktop}>
    {props.children}
  </MediaQuery>
);

export const DesktopBreakpoint = props => (
  <Breakpoint name="desktop">{props.children}</Breakpoint>
);
export const TabletBreakpoint = props => (
  <Breakpoint name="tablet">{props.children}</Breakpoint>
);
export const PhoneBreakpoint = props => (
  <Breakpoint name="phone">{props.children}</Breakpoint>
);

const getWidth = _ => window.innerWidth;
export const isMobile = () => getWidth() < 768;
export const isTablet = () => getWidth() < 992;
export const isDesktop = () => getWidth() >= 992;
