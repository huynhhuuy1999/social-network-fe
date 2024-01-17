import { AppStore } from "@/store";
import { useStore } from "react-redux";

export const useAppStore: () => AppStore = useStore;
