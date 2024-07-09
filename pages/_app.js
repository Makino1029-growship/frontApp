import { CommonProvider } from "@/hook/commonContext";
export default function App({ Component, pageProps }) {
  return (
    <CommonProvider>
      <Component {...pageProps} />
    </CommonProvider>
  );
}
