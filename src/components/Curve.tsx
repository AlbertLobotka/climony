import { Path, Svg } from "react-native-svg";

interface Props {
  color;
}

const Curve = ({ color }: Props) => {
  return (
    <Svg width={200} height={200} viewBox="0 0 500 500">
      <Path
        fill={color}
        stroke={color}
        d="M 0 323.264 L 0 499.691 L 165.517 500.905 C 67.319 499.58 0 405.849 0 323.264 Z"
      />
    </Svg>
  );
};

export default Curve;
