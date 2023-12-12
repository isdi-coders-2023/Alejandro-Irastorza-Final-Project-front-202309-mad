type Props = {
  title?: string;
};
export function Header({ title }: Props) {
  return (
    <div>
      <div>
        <img src="alien-bar-isotipe.svg" alt="" />
      </div>
      {title && <h2>{title}</h2>}
    </div>
  );
}
