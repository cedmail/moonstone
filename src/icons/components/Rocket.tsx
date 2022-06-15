import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgRocket = ({
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
      <path d="M4.8228 10.8193L7.05076 11.7023C6.79956 12.3084 6.59918 12.9327 6.45152 13.5693L6.36701 13.9364L9.56107 16.9912L9.9452 16.9122C10.6112 16.7711 11.2643 16.5796 11.8985 16.3395L12.8224 18.469C12.8314 18.4901 12.8458 18.5087 12.8643 18.5232C12.8827 18.5377 12.9046 18.5475 12.928 18.5519C12.9515 18.5563 12.9757 18.555 12.9984 18.5482C13.0212 18.5414 13.0419 18.5294 13.0586 18.5131L14.4549 17.1784C14.6828 16.9607 14.8604 16.6996 14.9761 16.4122C15.0919 16.1248 15.1434 15.8173 15.1271 15.5097L15.0772 14.6524C17.6624 12.8276 20.2784 9.62782 20.9909 4.04334C21.0111 3.90333 20.9972 3.76074 20.9503 3.6267C20.9034 3.49266 20.8248 3.37079 20.7205 3.27058C20.6162 3.17037 20.4891 3.09453 20.3491 3.04898C20.2091 3.00343 20.06 2.98939 19.9134 3.00796C14.0727 3.69454 10.7231 6.19673 8.81393 8.66036L7.9189 8.6163C7.59777 8.5996 7.27653 8.64732 6.97585 8.7564C6.67516 8.86548 6.40169 9.0335 6.17302 9.24965L4.7767 10.5843C4.75735 10.6 4.7427 10.6203 4.73422 10.6432C4.72574 10.6661 4.72374 10.6907 4.72842 10.7145C4.7331 10.7384 4.74429 10.7606 4.76087 10.779C4.77744 10.7974 4.7988 10.8113 4.8228 10.8193ZM13.7808 7.56623C14.0227 7.33574 14.3308 7.17895 14.6659 7.11566C15.0011 7.05238 15.3483 7.08543 15.6638 7.21065C15.9793 7.33587 16.249 7.54764 16.4386 7.81922C16.6283 8.0908 16.7295 8.41001 16.7295 8.73655C16.7295 9.06308 16.6283 9.38229 16.4386 9.65387C16.249 9.92545 15.9793 10.1372 15.6638 10.2624C15.3483 10.3877 15.0011 10.4207 14.6659 10.3574C14.3308 10.2941 14.0227 10.1374 13.7808 9.90686C13.6196 9.75337 13.4917 9.57098 13.4045 9.37015C13.3173 9.16932 13.2723 8.954 13.2723 8.73655C13.2723 8.51909 13.3173 8.30378 13.4045 8.10295C13.4917 7.90212 13.6196 7.71973 13.7808 7.56623ZM4.40601 17.2353C4.03629 17.1113 3.63926 17.081 3.25361 17.1472C3.21934 17.1543 3.18374 17.153 3.15016 17.1433C3.11657 17.1337 3.08608 17.1161 3.06155 17.0922C3.03113 17.0632 3.01077 17.026 3.00321 16.9856C2.99565 16.9452 3.00127 16.9036 3.01929 16.8664C3.42839 16.0256 4.51357 14.3348 6.47841 15.7006C6.48867 15.7094 6.49688 15.7202 6.5025 15.7322C6.50812 15.7442 6.51103 15.7572 6.51103 15.7704C6.51103 15.7836 6.50812 15.7966 6.5025 15.8086C6.49688 15.8206 6.48867 15.8314 6.47841 15.8401C6.21535 16.0382 6.00475 16.2925 5.86361 16.5828C5.72247 16.873 5.65476 17.1909 5.66597 17.5107C5.6674 17.5483 5.68364 17.5839 5.71143 17.6105C5.73922 17.637 5.7765 17.6525 5.81578 17.6539C6.149 17.6667 6.48072 17.6046 6.78427 17.4726C7.08782 17.3406 7.35474 17.1424 7.56358 16.8939C7.57277 16.8831 7.58434 16.8745 7.59746 16.8685C7.61058 16.8626 7.62492 16.8595 7.63945 16.8595C7.65397 16.8595 7.66831 16.8626 7.68143 16.8685C7.69455 16.8745 7.70613 16.8831 7.71531 16.8939C7.98805 17.2041 8.73903 18.2175 7.90738 19.196C7.54431 19.6131 7.0241 19.8768 6.4592 19.9303C5.65252 20.0129 4.16209 20.2644 3.55324 20.929C3.5288 20.9566 3.49695 20.9775 3.46111 20.9892C3.42526 21.0009 3.38675 21.0032 3.34968 20.9956C3.31262 20.9881 3.27839 20.9711 3.25065 20.9464C3.22291 20.9217 3.20269 20.8903 3.19215 20.8555C2.97704 20.1543 2.64284 18.5865 4.40601 17.2353Z" />
    </svg>
  );
};

export default SvgRocket;