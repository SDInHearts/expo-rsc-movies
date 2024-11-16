import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerBlurEffect: "systemChromeMaterial",
        headerLargeTitleShadowVisible: false,
        headerShadowVisible: true,
        headerLargeStyle: {
          // NEW: Make the large title transparent to match the background.
          backgroundColor: "transparent",
        },
        title: "Search",
      }}
    />
  );
}
