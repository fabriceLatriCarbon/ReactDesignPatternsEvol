import { WavyBackground } from "@landing/index";

export default function AppPage() {
  return (
    <WavyBackground colors={["#3f51b5", "#9c27b0", "#e91e63", "#bd2130"]}>
      <p className="text-2xl md:text-4xl text-gray-800 dark:text-white font-bold inter-var text-cente mt-32">
        L'évolution des design patterns dans React
      </p>
    </WavyBackground>
  )
}
