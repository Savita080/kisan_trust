import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col">
      <Outlet />
    </div>
  );
}
