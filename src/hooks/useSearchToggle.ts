import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    open: boolean;
};

type Actions = {
    showDropdown: () => void;
    hideDropdown: () => void;
};

export const useSearchToggle = create<State & Actions>()(
    immer((set) => ({
        open: false,
        showDropdown: () =>
            set((state) => {
                state.open = true;
            }),
        hideDropdown: () =>
            set((state) => {
                state.open = false;
            }),
    })),
);
