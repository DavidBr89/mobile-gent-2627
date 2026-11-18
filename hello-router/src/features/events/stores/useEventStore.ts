import { create } from "zustand";
import { TMEvent } from "../types";
import { string, z } from "zod";

import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Favorites from "@/app/(tabs)/favorites";

const eventStoreSchema = z.object({
  favorites: z.array(z.object({ id: string, name: string })),
});

interface EventsStoreActions {
  addFavorite: (event: TMEvent) => void;
}

type EventsStore = z.infer<typeof eventStoreSchema> & EventsStoreActions;

export const useEventStore = create<EventsStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (event) => {
        set((state) => ({ favorites: [...state.favorites, event] }));
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ favorites }) => ({ favorites }),
      merge: (persistedState, state) => {
        if (persistedState === undefined) {
          return state;
        }

        const persisted = eventStoreSchema.parse(persistedState);
        return { ...persisted, ...state };
      },
    },
  ),
);
