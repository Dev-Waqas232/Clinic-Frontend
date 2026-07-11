import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <React.Fragment>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
