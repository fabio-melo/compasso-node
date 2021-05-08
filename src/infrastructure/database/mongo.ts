import { DATABASE_URI } from '@/config';
import { MongoClient, Collection } from 'mongodb'

export class MongoConnector{
  private readonly uri: string;
  private client;

  constructor(){
    this.uri = DATABASE_URI;
    this.client = new MongoClient(DATABASE_URI);
    // todo: error checking
  }
  
  async connect(): Promise<void>{
    await this.client.connect();
  }
  async close(): Promise<void>{
    await this.client.close()
  }
  async collection(name: string): Promise<Collection>{
    return this.client.db().collection(name)
  }

}