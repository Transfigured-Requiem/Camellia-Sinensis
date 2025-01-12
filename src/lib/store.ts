import { create } from "zustand"

import { FeaturesStore } from "@/types"

export const useFeatureStore = create<FeaturesStore>((set) => ({
	inViewFeature: null,
	setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
}))
