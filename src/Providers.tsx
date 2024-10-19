import {
  RouterProvider,
  createHashHistory,
  createRouter,
} from "@tanstack/react-router";

import OpinionsProvider from "./providers/OpinionsProvider/OpinionsProvider";
import { routeTree } from "./routeTree.gen";

const hashHistory = createHashHistory();

const router = createRouter({ routeTree, history: hashHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function Providers() {
  return (
    <OpinionsProvider>
      <RouterProvider router={router} />
    </OpinionsProvider>
  );
}
