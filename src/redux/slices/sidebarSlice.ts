import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
  isCollapsed: boolean;
  activeSection: string;
}

const initialState: SidebarState = {
  isOpen: false, // For mobile sidebar overlay
  isCollapsed: false, // For desktop sidebar expanded/collapsed state
  activeSection: "home",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    toggleCollapse: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    setCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isCollapsed = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  toggleCollapse,
  setCollapsed,
  setActiveSection,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
