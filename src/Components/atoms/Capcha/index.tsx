import { FC, useRef } from 'react';
import './Capcha.scss';
import { captchaUrl } from '../../../const';

export const Captcha: FC = () => {
  const imgEl = useRef<HTMLImageElement | null>(null);
  const handlerButtonRefresh = () => {
    if (imgEl.current) {
      imgEl.current.src = captchaUrl;
    }
  };

  return (
    <div className="captcha">
      <img ref={imgEl} className="captcha__img" src={captchaUrl} alt="captcha" />
      <button onClick={handlerButtonRefresh} type="button" className="captcha__btn" aria-label="refresh captcha" />
    </div>
  );
};
