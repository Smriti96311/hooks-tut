import React, { useImperativeHandle } from 'react'

function CustomInput({ style, ...props }, ref) {
    useImperativeHandle(ref, () => {
        return {alertHi : () => alert('Hi')}
    }, []);
    return (
      <input
        ref={ref}
        {...props}
        style={{
          backgroundColor: 'gold',
          fontSize: "14px",
          ...style,
        }}
      />
    );
}

export default React.forwardRef(CustomInput);
