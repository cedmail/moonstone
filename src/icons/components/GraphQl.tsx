import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgGraphQl = ({
    size = 'default',
    className = '',
    color,
    ...otherProps
}: IconProps) => {
    const props = Object.assign(
        {},
        {
            size,
            className,
            ...otherProps
        }
    );
    const classNameColor = color ? ' moonstone-icon_' + color : '';
    props.className =
    className + ' moonstone-icon moonstone-icon_' + size + classNameColor;
    return (
        <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
        >
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5479 5.06281C13.5911 4.91755 13.6142 4.76361 13.6142 4.60419C13.6142 3.71706 12.8972 3 12.01 3C11.1229 3 10.4059 3.71706 10.4059 4.60419C10.4059 4.76268 10.4287 4.91574 10.4714 5.06026L6.76905 7.19787C6.66522 7.08824 6.54407 6.99141 6.40674 6.91164C5.63912 6.47038 4.65547 6.73238 4.2142 7.5C3.77293 8.26762 4.03494 9.25128 4.80256 9.69254C4.93957 9.7713 5.08346 9.82766 5.22992 9.86273V14.1382C5.08506 14.1734 4.9427 14.2294 4.80695 14.3075C4.03933 14.7533 3.77733 15.7324 4.2186 16.5C4.65986 17.2676 5.63892 17.5296 6.41114 17.0884C6.54708 17.0094 6.66716 16.9137 6.77029 16.8054L10.4707 18.942C10.4285 19.0858 10.4059 19.2381 10.4059 19.3958C10.4059 20.2829 11.1229 21 12.01 21C12.8972 21 13.6142 20.2783 13.6142 19.3958C13.6142 19.2191 13.5858 19.049 13.5332 18.8901L17.2115 16.7664C17.3227 16.8912 17.4554 17.0005 17.6082 17.0884C18.3758 17.5296 19.3595 17.2676 19.8008 16.5C20.2466 15.7324 19.9846 14.7533 19.2124 14.3075C19.0769 14.2296 18.9346 14.1736 18.7898 14.1384V9.86278C18.9363 9.8277 19.0803 9.77133 19.2174 9.69254C19.985 9.24668 20.247 8.26762 19.8057 7.5C19.3598 6.73238 18.3808 6.47038 17.6132 6.91164C17.4751 6.99186 17.3533 7.08934 17.2491 7.19974L13.5479 5.06281ZM11.5634 6.14558C11.7051 6.18647 11.855 6.20838 12.01 6.20838C12.1656 6.20838 12.316 6.18632 12.4582 6.14516L17.3024 14.5354C17.1939 14.6388 17.0983 14.7593 17.0199 14.8958C16.9419 15.0314 16.8859 15.1738 16.8508 15.3187H7.16869C7.13355 15.1739 7.07751 15.0315 6.99949 14.8958C6.92086 14.7604 6.82563 14.6408 6.71791 14.5379L11.5634 6.14558ZM10.8559 5.71929C10.871 5.73486 10.8863 5.75012 10.902 5.76508L6.05654 14.1574C6.03546 14.1513 6.01425 14.1456 5.99294 14.1403V9.85899C6.40129 9.75752 6.76924 9.49709 6.9951 9.10419C7.22066 8.71181 7.26246 8.26418 7.14691 7.86076L10.8559 5.71929ZM13.1192 5.76404C13.1338 5.75003 13.1482 5.73575 13.1623 5.72121L16.8723 7.86324C16.7576 8.26602 16.7997 8.71261 17.0248 9.10419C17.2506 9.49703 17.6185 9.75745 18.0268 9.85895V14.1398C18.006 14.1449 17.9852 14.1505 17.9646 14.1564L13.1192 5.76404ZM16.882 16.187L13.1963 18.315C12.9031 17.9933 12.4805 17.7916 12.01 17.7916C11.5557 17.7916 11.146 17.9797 10.8543 18.2824L7.15003 16.1436C7.15598 16.1231 7.16151 16.1025 7.16664 16.0817H16.8523C16.861 16.1171 16.8709 16.1523 16.882 16.187Z"
      />
        </svg>
    );
};

export default SvgGraphQl;
