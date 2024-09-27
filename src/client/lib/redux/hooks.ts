import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@/lib/types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
