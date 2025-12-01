import { create } from 'zustand'

interface ProfileState {
  firstName: string,
  lastName:string
  setFirstName: (firstName: string) => void
  setLastName: (lastName: string) => void

}

export const useProfileStore = create<ProfileState>((set) => ({
    firstName: '',
    lastName:'',
    setFirstName: (firstName: string) => set({ firstName }),
    setLastName: (lastName: string) => set({ lastName }),
}))