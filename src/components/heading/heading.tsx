import './heading.style.scss';

type Props = {
  imagePath: string;
  imgDescription: string;
};
export function Heading({ imagePath, imgDescription }: Props) {
  return (
    <div className="heading-container">
      <img src={imagePath} alt={imgDescription} />;
    </div>
  );
}
