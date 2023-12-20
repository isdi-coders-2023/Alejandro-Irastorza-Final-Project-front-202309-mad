import './heading.style.scss';

type Props = {
  imagePath: string;
  imgDescription: string;
};
export function Heading({ imagePath, imgDescription }: Props) {
  return (
    <div className="heading-container">
      <img loading="lazy" src={imagePath} alt={imgDescription} />
    </div>
  );
}
