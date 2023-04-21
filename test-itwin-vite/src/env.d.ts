/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_IMJS_AUTH_CLIENT_CLIENT_ID: string;
  readonly VITE_IMJS_AUTH_CLIENT_REDIRECT_URI: string;
  readonly VITE_IMJS_AUTH_CLIENT_LOGOUT_URI: string;
  readonly VITE_IMJS_AUTH_CLIENT_SCOPES: string;
  readonly VITE_IMJS_AUTH_AUTHORITY: string;
  readonly VITE_IMJS_ITWIN_ID: string;
  readonly VITE_IMJS_IMODEL_ID: string;
  readonly VITE_SKIP_PREFLIGHT_CHECK: string;
  readonly VITE_USE_FAST_SASS: string;
  readonly VITE_USE_FULL_SOURCEMAP: string;
  readonly VITE_TRANSPILE_DEPS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
