type Props = {
  title?: string;
};
export function HeaderAdmin({ title }: Props) {
  return (
    <div>
      <div>
        <img src="alien-bar-isotipe.svg" alt="" />
        Admin Pannel
      </div>
      <div>
        <p>Username</p>
        <div>
          <img src="" alt="" />
          <p>Cerrar sesión</p>
        </div>
      </div>
      <div>
        {title && <h2>{title}</h2>}
        <select name="Filtrar por" id=""></select>
      </div>
    </div>
  );
}
