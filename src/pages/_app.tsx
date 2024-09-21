import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const theme = {
  elements: {
    formButtonPrimary: 
      "bg-blue-500 hover:bg-blue-600 text-sm normal-case",
    card: "bg-white shadow-lg rounded-lg",
    headerTitle: "text-2xl font-bold",
    headerSubtitle: "text-gray-600",
  },
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider> 
    </div>
  );
};

export default api.withTRPC(MyApp);
