// src/styles/styled-components.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    theme: "dark" | "light";
  }
}
