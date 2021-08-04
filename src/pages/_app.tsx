import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

// eslint-disable-next-line react/destructuring-assignment
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
