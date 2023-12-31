import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    itemBgColor: string;
    accentColor: string;
    buttonBgColor: string;
  }
}
