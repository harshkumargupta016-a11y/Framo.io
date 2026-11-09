/**
 * MODAL PROVIDER & CONTEXT
 * What this file does: Global context provider for opening accessible site modals (signup, login, demo, etc.).
 * What to edit: Add modal lifecycle hooks or global modal listeners here.
 */
"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { ActionModal } from "@/components/ui/ActionModal";
import { siteModalsContent } from "@/content/siteModals";

const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }) {
  const [modalKey, setModalKey] = useState(null);
  const [customData, setCustomData] = useState(null);

  const openModal = useCallback((key, custom = null) => {
    setModalKey(key);
    setCustomData(custom);
  }, []);

  const closeModal = useCallback(() => {
    setModalKey(null);
    setCustomData(null);
  }, []);

  const modalData = customData || (modalKey ? siteModalsContent[modalKey] : null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ActionModal
        isOpen={Boolean(modalKey && modalData)}
        onClose={closeModal}
        modalData={modalData}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
