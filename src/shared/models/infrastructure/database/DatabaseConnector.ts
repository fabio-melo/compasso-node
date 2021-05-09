export interface DatabaseConnector{
  connect(): Promise<void>
  close(): Promise<void>
  collection(name: string): any
}