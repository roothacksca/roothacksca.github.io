import brand from "../../assets/images/brand.png"

type BrandComponentProps = {
    width?: number;
    height?: number;
};

export default function({ width, height }: BrandComponentProps) {
    return <>
        <div className="brand" style={{
            width: width || 128,
            height: height || 128,
        }}>
            <img width={width || 128} height={height || 128} style={{ borderRadius: 10 }} src={brand} alt="" />
        </div>
    </>
}