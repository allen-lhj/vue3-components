import { useContext } from "./useContext";

const key: InjectionKey<AppProviderContextProps> = Symbol();

export interface AppProviderContextProps {
  prefixCls: Ref<string>;
  isMobile: Ref<boolean>;
}
export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key);
}

export function useDesign(scope: string) {
  const values = useAppProviderContext();

  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls,
  };
}
