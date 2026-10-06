// Web3Forms access key for the quote form (https://web3forms.com).
// It only allows sending form submissions to the inbox it was created for,
// so it is designed to be public. VITE_WEB3FORMS_KEY in Vercel overrides it.
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "49784fd8-f95c-4e94-9525-2136dc37f935";

// hCaptcha site key that Web3Forms provides for its free plan; Web3Forms
// verifies the captcha answer and rejects enquiries without one.
export const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
