import { useTheme, useMediaQuery } from "@mui/material";
import { Fragment } from "react";

type PropsWithChildren = {
  children?: React.ReactNode;
};

type MediaQueryComponent = React.ReactNode | null;

export function AboveMobile({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isAboveMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return <Fragment>{isAboveMobile ? children : null}</Fragment>;
}

export function AboveTablet({ children = null }: PropsWithChildren) {
  const theme = useTheme();
  const isAboveTablet = useMediaQuery(theme.breakpoints.up("md"));
  return <Fragment>{isAboveTablet ? children : null}</Fragment>;
}

export function AboveDesktop({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isAboveDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return <Fragment>{isAboveDesktop ? children : null}</Fragment>;
}

export function BelowMobile({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isBelowMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return <Fragment>{isBelowMobile ? children : null}</Fragment>;
}

export function BelowTablet({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isBelowTablet = useMediaQuery(theme.breakpoints.down("md"));
  return <Fragment>{isBelowTablet ? children : null}</Fragment>;
}

export function BelowDesktop({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isBelowDesktop = useMediaQuery(theme.breakpoints.down("lg"));
  return <Fragment>{isBelowDesktop ? children : null}</Fragment>;
}
