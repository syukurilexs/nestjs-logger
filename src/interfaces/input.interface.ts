export interface IInput {
  logsource: string; // Recommend to use project name
  appname: string; // Recommend to use application name
  body: {[key: string]: any}; // Data to be display can be any format

  /**
   * For data recommend to use object 
   * eg: 
   * {
   *    message: 'Message'
   * }
   */
}