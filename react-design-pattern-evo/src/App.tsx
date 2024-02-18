import { Suspense } from "react"
import { useRoutes } from "react-router-dom"

import AppLayout from "@ui/layouts/AppLayout";

import routes from '~react-pages';

function App() {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppLayout>
        {useRoutes(routes)}
      </AppLayout>
    </Suspense>
  )
}

export default App
