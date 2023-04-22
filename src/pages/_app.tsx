import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import {ClerkProvider, SignedIn, SignedOut, SignInButton} from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <ClerkProvider {...pageProps} >
            <SignedIn>
                <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal"/>
            </SignedOut>
        </ClerkProvider>
    );
  }

export default api.withTRPC(MyApp);
