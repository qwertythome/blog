import {create} from 'zustand';

interface AuthState {
  email: string;
  password: string;
  username: string;
  emailError: string;
  passwordError: string;
  usernameError: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  emailValid: (email: string) => void;
  passwordValid: (password: string) => void;
  usernameValid: (username: string) => void;
}

export const useAuth = create<AuthState>((set) => ({
  email: '',
  password: '',
  username: '',
  emailError:'',
  passwordError:'',
  usernameError:'',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUsername: (username) => set({ username }),
  emailValid: (email) => set({emailError: !email.includes("@") || email.length < 5 ? 'its not Email' : ''}),
  passwordValid: (password) => set({ passwordError: password.length < 5 ? 'Password must be at least 5 characters' : '' }),
  usernameValid: (username) => set({ usernameError: username.length < 5 ? 'Username must be at least 5 characters' : '' }),


}));

