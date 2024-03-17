import { Suspense } from "react"
import { useRoutes } from "react-router-dom"

import AppLayout from "@ui/layouts/AppLayout";

import routes from '~react-pages';
import SimpleModal from "@ui/modals/SimpleModal/view";
import GradientSpinner from "@ui/spinners/GradientSpinner/view";

function App() {

  return (
    <AppLayout>
      <Suspense fallback={
        <SimpleModal>
          <h2 className="text-gray-800 dark:text-gray-200 text-4xl">Loading...</h2>
          <GradientSpinner />
        </SimpleModal>
      }>
        {useRoutes(routes)}
      </Suspense >
    </AppLayout >
  )
}

export default App
