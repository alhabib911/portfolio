import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PortfolioState {
  skillCategory: string;
  projectCategory: string;
  testimonialIndex: number;
  contactForm: {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  };
}

const initialState: PortfolioState = {
  skillCategory: "Frontend",
  projectCategory: "All",
  testimonialIndex: 0,
  contactForm: {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  },
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setSkillCategory: (state, action: PayloadAction<string>) => {
      state.skillCategory = action.payload;
    },
    setProjectCategory: (state, action: PayloadAction<string>) => {
      state.projectCategory = action.payload;
    },
    setTestimonialIndex: (state, action: PayloadAction<number>) => {
      state.testimonialIndex = action.payload;
    },
    nextTestimonial: (state, total: PayloadAction<number>) => {
      state.testimonialIndex = (state.testimonialIndex + 1) % total.payload;
    },
    prevTestimonial: (state, total: PayloadAction<number>) => {
      state.testimonialIndex =
        (state.testimonialIndex - 1 + total.payload) % total.payload;
    },
    updateContactForm: (
      state,
      action: PayloadAction<Partial<PortfolioState["contactForm"]>>
    ) => {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },
    resetContactForm: (state) => {
      state.contactForm = initialState.contactForm;
    },
  },
});

export const {
  setSkillCategory,
  setProjectCategory,
  setTestimonialIndex,
  nextTestimonial,
  prevTestimonial,
  updateContactForm,
  resetContactForm,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
