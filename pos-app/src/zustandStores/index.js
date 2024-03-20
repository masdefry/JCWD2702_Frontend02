import { create } from "zustand";
import { createAuthSlice } from "./auth";
import { persist, createJSONStorage, combine } from 'zustand/middleware';
import { createProductSlice } from "./product";

export const useZustandStores = create(
    combine(
        persist(
            (...a) => ({
                ...createAuthSlice(...a),
                ...createProductSlice(...a),
            }),
            {
                name: 'pos-app',
                storage: createJSONStorage(() => localStorage)
            }
        )
)
);
