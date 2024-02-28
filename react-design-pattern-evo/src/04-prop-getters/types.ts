export type UseCounterParams = {
  max: number;
  initial: number;
};

export type UseCounterData = {
  count: number;
  getCounterProps: (props?: GetCounterProps) => CounterProps;
  getIncrementProps: (props?: GetIncrementProps) => IncrementProps;
  getDecrementProps: (props?: GetDecrementProps) => DecrementProps;
};

export type CounterContextValue = {
  count?: number;
};

export type CounterProps = React.PropsWithChildren &
  Partial<React.HTMLAttributes<HTMLDivElement>> &
  Partial<{
    value: number;
    onChange?: (...args: unknown[]) => unknown;
  }>;

export type CountProps = {
  max: number;
};

export type LabelProps = React.PropsWithChildren;

export type IncrementProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
};

export type DecrementProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
};

export type GetCounterProps = CounterProps & {
  value: number;
};

export type GetIncrementProps = IncrementProps & {
  onClick?: (...args: unknown[]) => unknown;
};

export type GetDecrementProps = DecrementProps & {
  onClick?: (...args: unknown[]) => unknown;
};
