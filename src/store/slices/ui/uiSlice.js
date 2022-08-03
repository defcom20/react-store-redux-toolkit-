import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isToggleMenu: false,
        isConfigDesign: false,
        breakpoint: 0
    },
    reducers: {
        toggleMenu: (state) => {
            state.isToggleMenu = !state.isToggleMenu;
        },
        toggleConfigDesign: (state, action) => {

            if (action.payload) {
                state.isConfigDesign = false
            } else {
                state.isConfigDesign = !state.isConfigDesign;
            }
        },
        setBreakpoint: (state, action) => {
            state.breakpoint = action.payload;
        }
    }
})

export const { toggleMenu, toggleConfigDesign, setBreakpoint } = uiSlice.actions