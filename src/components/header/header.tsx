import './header.style.scss';

type Props = {
  title?: string;
};
export function Header({ title }: Props) {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img className="header-logo" src="/alien-bar-isotipe.png" alt="" />
      </div>
      {title && <h2 className="header-title">{title}</h2>}
    </header>
  );
}
