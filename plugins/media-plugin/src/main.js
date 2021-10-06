import { mediaRenderer } from "./media-renderer";
import { mediaStore } from "./media-store";

export const metadata = {
  id: "cloud.liquidscale.media",
  version: "1.0.0",
  vendor: "LiquidScale.Cloud",
  license: "MIT"
};

export default function mediaPlugin(engine) {
  // Could listen to engine lifecycle, cluster events, anything!
  // Returned functions that will be accessible either
  return {
    platform: {
      mediaRenderer: mediaRenderer(engine),
      mediaStore: mediaStore(engine)
    },
    cluster: {},
    engine: {}
  };
}
