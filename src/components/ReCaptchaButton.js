import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const ReCaptchaButton = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState('');
  const [dynamicAction, setDynamicAction] = useState('contact');

  const clickHandler = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const result = await executeRecaptcha('dynamicAction');

    setToken(result);
  }, [dynamicAction, executeRecaptcha]);

  const handleReCaptchaVerify = useCallback(
    token => {
      setToken(token);
      document.getElementById('captchaResponse').value = token;
    },
    [setToken]
  );

  return (
    <div>
      <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
      <button className="button is-link" type="submit" onClick={clickHandler}>Send</button>
      <GoogleReCaptcha
        action={dynamicAction}
        onVerify={handleReCaptchaVerify}
      />
    </div>
  );
};

export default ReCaptchaButton;
