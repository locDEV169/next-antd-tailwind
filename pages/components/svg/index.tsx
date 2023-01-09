import Image from "next/image";
import { FC, Fragment } from "react";

interface ISvgImageProps {
  readonly src: string;
  readonly width?: number;
  readonly height?: number;
}

const SvgImage: FC<ISvgImageProps> = ({ src, width = 300, height = 300 }) => (
  <Fragment>
    <Image
      alt={`illustration for ${src}`}
      src={`/assets/svg/undraw_${src}.svg`}
      width={width}
      height={height}
    />
  </Fragment>
);

export default SvgImage;
