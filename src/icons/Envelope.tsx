import { createElement } from 'react';

interface Props {
  size?: string;
  high?: string;
  color?: string;
}

export function SvgEnvelope(props: Props) {
    return (createElement('svg', {
 viewBox: '0 0 32 32', width: '1em', height: '1em', ...props,
},
        createElement('path', { d: 'M3 8v18h26V8zm4.313 2h17.375L16 15.781zM5 10.875l10.438 6.969.562.343.563-.343L27 10.875V24H5z' })));
}
export default SvgEnvelope;
