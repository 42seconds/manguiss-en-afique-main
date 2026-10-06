// Web3Forms access key for the quote form (https://web3forms.com).
// It only allows sending form submissions to the inbox it was created for,
// so it is designed to be public. VITE_WEB3FORMS_KEY in Vercel overrides it.
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "b02c8703-cc4a-4261-b250-cd3f75ab6f49";

// hCaptcha site key that Web3Forms provides for its free plan; Web3Forms
// verifies the captcha answer and rejects enquiries without one.
export const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
