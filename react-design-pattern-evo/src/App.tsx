import { Suspense } from "react"
import { useRoutes } from "react-router-dom"

import AppLayout from "@ui/layouts/AppLayout";

import routes from '~react-pages';

function App() {

  return (
    <Suspense fallback={
      <div className="h-full flex justify-center items-center">
        <p className="text-gray-200 text-4xl">Loading...</p>
      </div>
    }>
      <AppLayout>
        {useRoutes(routes)}
      </AppLayout>
    </Suspense>
  )
}

export default App
