"use client"
import { store } from "@/store";
import NiceModal from '@ebay/nice-modal-react';
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export const ProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
      <NiceModal.Provider>
      {children}
      <Toaster />
      </NiceModal.Provider>
    </Provider>
  );
};