export class DIContainer {
  private static instance: DIContainer;
  private registry: Map<string, any> = new Map<string, any>();

  public static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  public register<T>(token: string, clazz: new () => T): void {
    this.registry.set(token, new clazz());
  }

  public resolve<T>(token: string): T {
    const instance = this.registry.get(token);
    if (!instance) {
      throw new Error(`No provider found for ${token}`);
    }
    return instance;
  }
}
