import { ComponentPropsWithRef, forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithRef<'textarea'>
>(({ children, ...restProps }, ref) => (
  <textarea
    ref={ref}
    {...restProps}
    className='border rounded-xl w-full px-2 py-4 shadow-sm'
  >
    {children}
  </textarea>
))
