import './Capcha.scss';
import { FC, useRef } from 'react';
import { captchaUrl } from '../../../const';

export const Captcha: FC = () => {
  const imgEl = useRef<HTMLImageElement | null>(null);
  const handlerClickBtn = () => {
    if (imgEl.current) {
      imgEl.current.src = captchaUrl;
    }
  };

  return (
    <div className="captcha">
      <img ref={imgEl} className="captcha__img" src={captchaUrl} alt="captcha" />
      <button onClick={handlerClickBtn} type="button" className="captcha__btn" aria-label="refresh captcha" />
    </div>
  );
};
