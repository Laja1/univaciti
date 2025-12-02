import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProfileState {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setId: (id: number) => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      email: "",
      id: 0,
      setFirstName: (firstName) => set({ firstName }),
      setLastName: (lastName) => set({ lastName }),
      setEmail: (email) => set({ email }),
      setId: (id) => set({ id }),
    }),
    {
      name: "profile-storage", // 🔥 Key used in localStorage
      partialize: (state) => ({
        // optional: choose what to persist
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        id: state.id,
      }),
    }
  )
);
