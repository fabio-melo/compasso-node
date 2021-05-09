import { DATABASE_URI, DATABASE_NAME } from '@/config';
import { MongoClient, Collection } from 'mongodb'

console.log("DATA", DATABASE_NAME);

export class MongoConnector{
  private readonly uri: string = DATABASE_URI;
  private readonly db: string = DATABASE_NAME;
  private client;

  constructor(){
    this.client = new MongoClient(DATABASE_URI,  { useUnifiedTopology: true });
    // todo: error checking
  }
  
  async connect(): Promise<void>{
    await this.client.connect();
  }
  async close(): Promise<void>{
    await this.client.close()
  }
  
  async collection(name: string): Promise<Collection>{
    const db = this.client.db(DATABASE_NAME);
    return db.collection(name);
    
  }

}