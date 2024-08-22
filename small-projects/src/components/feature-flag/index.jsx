import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "./data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e.error);
      throw new Error(e.error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  });
  return (
    <FeatureFlagContext.Provider value={{ enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
