/**
 * A hover/focus tooltip for a single child element.
 *
 * The child becomes the trigger, so it must be an element that accepts a ref
 * and DOM props. Disabled elements never emit pointer events, so wrap those in
 * a plain element (e.g. `<div>`) and pass that as the child instead.
 */

import React, { cloneElement, useState, type ReactElement, type ReactNode, type Ref } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  useTransitionStyles,
  FloatingPortal,
} from '@floating-ui/react';

import './tooltip.css';

interface TooltipProps {
  content: ReactNode;
  /** The trigger element. Its `ref` is declared here because it arrives as a prop. */
  children: ReactElement<{ ref?: Ref<Element> } & Record<string, unknown>>;
}

export default function Tooltip({ content, children }: TooltipProps): ReactNode {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom',
    middleware: [offset(10), flip(), shift({ padding: 5 })],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { move: false }),
    useFocus(context),
    useDismiss(context),
    useRole(context, { role: 'tooltip' }),
  ]);

  // Fade in/out rather than appearing instantly.
  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: { open: 300, close: 250 },
  });

  // Preserve any ref the trigger already carries.
  const referenceRef = useMergeRefs([refs.setReference, children.props.ref]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ...children.props, ref: referenceRef }))}
      {isMounted && (
        <FloatingPortal>
          <div ref={refs.setFloating} className="tooltip__root" style={floatingStyles} {...getFloatingProps()}>
            <div className="tooltip" style={transitionStyles}>
              {content}
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
