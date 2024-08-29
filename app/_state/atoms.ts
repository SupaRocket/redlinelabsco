// recoil
import { atom } from 'recoil';

// loading states
export const isloadingState = atom({
  key: 'isLoadingState',
  default: true,
});

// form atoms
export const successState = atom({
  key: 'successState',
  default: false,
});

export const isErrorState = atom({
  key: 'isErrorState',
  default: false,
});

export const isSubmittingState = atom({
  key: 'isSubmittingState',
  default: false,
});

// ui atoms
export const scaleFactorsState = atom({
  key: 'scaleFactorsState',
  default: 1,
});
