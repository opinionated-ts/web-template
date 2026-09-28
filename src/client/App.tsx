import { Route, Switch } from "wouter-preact";

import { NotFound } from "@/pages/_404";
import { Home } from "@/pages/Home";

export function App(_props: Readonly<{ ssrData?: unknown }>) {
  return (
    <div class="bg-bg text-text min-h-screen antialiased">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
