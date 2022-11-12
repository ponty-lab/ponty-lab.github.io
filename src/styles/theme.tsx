import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    accentColor: string;
    background: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: "#286882",
  accentColor: "#d86623",
  background: "#ffffff",
};
