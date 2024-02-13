import { SharedComponentProps } from "../../hoc/type";




const CounterSubTitle: React.FC<SharedComponentProps> = ({ sharedState }: SharedComponentProps) => {

  return (
    <p className="fs-4 p-4">Je suis un composant utilisant l'état depuis un HOC : {sharedState < 2 ? `${sharedState.toString()} click` : `${sharedState.toString()} clicks`} </p>
  )
}

export default CounterSubTitle;