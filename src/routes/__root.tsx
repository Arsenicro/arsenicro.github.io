import ArsenicIcon from "@/assets/ArsenicIcon";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col flex-grow min-h-screen">
      <div className="sticky top-0 z-40 w-full backdrop-blur flex justify-between py-4 px-6 md:px-20 transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
        <div>
          <Link to="/">
            <ArsenicIcon className="w-10 h-10 text-white" />
          </Link>
        </div>
        <div className="flex p-2 justify-center gap-4">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/teaching" className="[&.active]:font-bold">
            Teaching
          </Link>
          {/*           <Link to="/blog" className="[&.active]:font-bold">
            Blog
          </Link> */}
        </div>
      </div>
      <div className="flex flex-col flex-grow px-6 md:px-20">
        <Outlet />
      </div>
      <div className="flex px-6 md:px-20 py-5 justify-center">
        © 2024 Kamil Matuszewski
      </div>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  ),
});
