import { atom } from 'recoil';

import { PreviewViewPort } from '@/types/styles.type';

export const previewVeiwportState = atom<PreviewViewPort>({
  key: 'previewVeiwportState',
  default: "small_mobile"
});
