import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgRichText = ({
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
            <path d="M10.5546 6.16553V5.69636H9.54846V9.35089H9.90656C10.139 9.35089 10.3597 9.52905 10.3597 9.78708C10.3597 10.0452 10.139 10.2233 9.90656 10.2233H8.19023C7.95784 10.2233 7.73708 10.0452 7.73708 9.78708C7.73708 9.52904 7.95781 9.35089 8.19023 9.35089H8.54407V5.69636H7.5379V6.16553C7.5379 6.4236 7.31716 6.60173 7.08475 6.60173C6.85233 6.60173 6.63159 6.42359 6.63159 6.16553V5.26018C6.63159 5.21238 6.63965 5.16607 6.65458 5.12271C6.71746 4.94009 6.89402 4.82397 7.08475 4.82397H11.0078C11.1565 4.82397 11.294 4.89366 11.3784 5.00893C11.4295 5.07889 11.4609 5.16575 11.4609 5.26018V6.16553C11.4609 6.42357 11.2402 6.60173 11.0078 6.60173C10.7754 6.60173 10.5546 6.4236 10.5546 6.16553Z"/>
            <path d="M16.651 15.8576L7.36963 15.8574C6.94537 15.8574 6.59833 15.5102 6.59809 15.0859C6.59809 14.6616 6.94534 14.3143 7.36963 14.3143L16.651 14.3146C17.0752 14.3146 17.4225 14.6618 17.4225 15.0861C17.4225 15.5104 17.0753 15.8576 16.651 15.8576Z"/>
            <path d="M7.36963 18.9434H11.9448C12.3691 18.9434 12.7163 18.5961 12.7163 18.1719C12.7163 17.7476 12.3691 17.4003 11.9448 17.4003H7.36963C6.94534 17.4003 6.59809 17.7476 6.59809 18.1719C6.59833 18.5962 6.94537 18.9434 7.36963 18.9434Z"/>
            <path d="M16.6275 12.7718H7.36963C6.94537 12.7718 6.59833 12.4245 6.59809 12.0002C6.59809 11.576 6.94534 11.2287 7.36963 11.2287H16.6275C17.0518 11.2287 17.399 11.576 17.399 12.0002C17.399 12.4245 17.0518 12.7718 16.6275 12.7718Z"/>
            <path d="M13.5427 9.6855H16.6287C17.053 9.6855 17.4003 9.33822 17.4003 8.91396C17.4003 8.48969 17.053 8.14242 16.6287 8.14242H13.5427C13.1184 8.14242 12.7712 8.48969 12.7712 8.91396C12.7712 9.33822 13.1182 9.6855 13.5427 9.6855Z"/>
            <path d="M16.6287 6.59952H13.5427C13.1182 6.59952 12.7712 6.25225 12.7712 5.82798C12.7712 5.40372 13.1184 5.05644 13.5427 5.05644H16.6287C17.053 5.05644 17.4003 5.40372 17.4003 5.82798C17.4003 6.25225 17.053 6.59952 16.6287 6.59952Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.44171 22.8007H18.557C19.6371 22.8007 20.4856 21.9521 20.4856 20.8721L20.4858 3.12761C20.4858 2.04751 19.6372 1.19897 18.5572 1.19897L5.44133 1.19873C4.36124 1.19873 3.5127 2.04733 3.5127 3.12736V20.8719C3.51245 21.9522 4.36167 22.8007 5.44171 22.8007ZM5.05592 3.12754C5.05592 2.89603 5.21019 2.74176 5.44171 2.74176H18.557C18.7885 2.74176 18.9427 2.89603 18.9427 3.12754V20.872C18.9427 21.1036 18.7885 21.2578 18.557 21.2578L5.44171 21.2576C5.21019 21.2576 5.05592 21.1033 5.05592 20.8718V3.12754Z"
      />
        </svg>
    );
};

export default SvgRichText;