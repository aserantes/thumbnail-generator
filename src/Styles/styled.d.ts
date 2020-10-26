import { ThemeType } from ".";
import {} from "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
