export class DIContainer {
  private static instance: DIContainer
  private static readonly registry: Map<string, any> = new Map<string, any>()

  private constructor() {}

  public static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer()
    }
    return DIContainer.instance
  }

  public static register<T>(token: string, clazz: new () => T): void {
    if (!DIContainer.registry.has(token)) {
      DIContainer.registry.set(token, new clazz())
    } else {
      throw new Error('The given token has been assigned.')
    }
  }

  public static resolve<T>(token: string): T {
    const instance = DIContainer.registry.get(token)
    if (!instance) {
      throw new Error(`No provider found for ${token}`)
    }
    return instance
  }
}
