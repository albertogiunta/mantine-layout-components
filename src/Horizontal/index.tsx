import React, { forwardRef } from 'react';
import { Group, GroupProps } from '@mantine/core';
import { CommonProps, commonProps } from '../commonProps';
import { ReactFC } from '../types';

export type HorizontalProps = GroupProps & CommonProps;

export const Horizontal: ReactFC<HorizontalProps> = forwardRef<
  any,
  HorizontalProps
>((props, ref: any) => {
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
    sxArray,
    ...rest
  } = props;

  return (
    <Group
      ref={ref}
      {...{
        ...(centerV && {
          align: 'center',
        }),
        ...(centerH && {
          justify: 'center',
        }),
      }}
      style={[
        {
          ...commonProps(props),
          ...(center && {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }),
        },
        //@ts-ignore
        style,
      ]}
      {...rest}
    >
      {children}
    </Group>
  );
});
