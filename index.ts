import { registerRootComponent } from "expo";

import App from "./src/App";
import "./src/global.css";
import Providers from "@/app/Providers";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Providers);
