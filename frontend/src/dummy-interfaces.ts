export interface Articles_IndexPage {
  foo: string;
  bar: {
    x: number;
    y?: number;
  };
}

type Articles_NewPageType = {
  a: string;
  b: {
    x: number;
    y?: number;
  };
};
export interface Articles_NewPage extends Articles_NewPageType {}
