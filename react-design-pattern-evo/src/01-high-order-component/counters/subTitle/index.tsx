import { SharedComponentProps } from "@hoc/type";




const CounterSubTitle: React.FC<SharedComponentProps> = ({ sharedState }: SharedComponentProps) => {

  return (
    <p className="text-xl mt-4 text-slate-200">Je suis un composant utilisant l'état depuis un HOC : {sharedState < 2 ? `${sharedState.toString()} click` : `${sharedState.toString()} clicks`} </p>
  )
}

export default CounterSubTitle;