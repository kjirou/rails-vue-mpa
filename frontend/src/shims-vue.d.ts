/**
 * NOTE: Only ts-loader in webpack refers to this type declaration.
 *       vue-tsc and Volar with Take Over Mode ( https://github.com/johnsoncodehk/volar/discussions/471 ) refer their own type.
 */
declare module "*.vue" {
  export default any;
  export type Props = any;
}
