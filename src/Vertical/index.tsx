import { Stack, StackProps } from '@mantine/core';
import { forwardRef } from 'react';
import { CommonProps, commonProps } from '../commonProps';
import { ReactFC } from '../types';

export let centerVerticalProps = {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
};

export type VerticalProps = StackProps & CommonProps;

export const Vertical: ReactFC<VerticalProps> = forwardRef<any, VerticalProps>(
  (props, ref) => {
    const {
      alignEnd,
      center,
      centerH,
      centerV,
      children,
      debug,
      fullH,
      fullW,
      noWrap,
      scrollable,
      spaceBetween,
      style,
      sxArray = [],
      ...rest
    } = props;

    let st = {
      alignItems: 'flex-start',
      ...commonProps(props),
      ...(center && {
        ...centerVerticalProps,
      }),
    };
    //todo: TS fix
    let style1 = [st, style, ...sxArray] as any;
    return (
      <Stack
        ref={ref}
        style={style1}
        {...(centerV && {
          align: 'center',
        })}
        {...(centerH && {
          justify: 'center',
        })}
        {...rest}
      >
        {children}
      </Stack>
    );
  }
);
