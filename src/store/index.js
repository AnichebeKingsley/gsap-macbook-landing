import { create } from 'zustand';

const useMacbookStore = create((set) => ({
 color: '#2e2c2e',
 scale: 0.06,
 setColor: (color) => set({ color }),
 setScale: (scale) => set({ scale }),
 reset: () => set({ color: '#2e2c2e', scale: 0.06 })
}));

export default useMacbookStore;