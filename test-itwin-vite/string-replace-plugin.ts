import type { Plugin } from "vite";

export class StringReplacePlugin implements Plugin {
  public name = StringReplacePlugin.name;
  public enforce = "pre" as const;

  public transform(code: string, _id: string) {
    return code.replace(
      /const { AzureFrontendStorage, FrontendBlockBlobClientWrapperFactory } = await import\((.+?)\);/s,
      `
      const objectStorage = await import($1);
      const { AzureFrontendStorage, FrontendBlockBlobClientWrapperFactory } = objectStorage.default ?? objectStorage;
      `
    );
  }
}
