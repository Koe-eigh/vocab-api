import { DIContainer } from "./DIContainer";

export function Inject(token: string): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    const container = DIContainer.getInstance();

    Object.defineProperty(target, propertyKey, {
      get() {
        return container.resolve(token);
      },
    });
  };
}
