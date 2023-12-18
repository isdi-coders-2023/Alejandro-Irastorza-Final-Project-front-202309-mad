import { useSelector } from 'react-redux';
import './pop.up.style.scss';
import { RootState } from '../../store/store';

type Props = {
  imgUrl?: string;
  imgDescription?: string;
  handleDisplay: () => void;
};
export function PopUp({ imgUrl, imgDescription, handleDisplay }: Props) {
  const { popUpState } = useSelector((state: RootState) => state.products);
  return (
    <>
      <div
        className={`pop-up-container ${popUpState ? 'fade-in' : 'fade-out'}`}
      >
        <img className="pop-up-image" src={imgUrl} alt={imgDescription} />
        <p onClick={handleDisplay} onKeyDown={handleDisplay}>
          X
        </p>
      </div>
    </>
  );
}
