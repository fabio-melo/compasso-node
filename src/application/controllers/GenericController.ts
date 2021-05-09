import express from "express"

export class GenericController {
  private req: express.Request;
  private res: express.Response;
  private readonly data: object;

  constructor(req: express.Request, res: express.Response) {
    this.req = req;
    this.res = res;
    this.data = req.body;
  }

  public getData(){
    return this.data;
  };

  public  jsonResponse (
    code: number, message: string
  ) {
    return this.res.status(code).json({ message })
  }

  public ok<T> (dto?: T) {
    if (!!dto) {
      this.res.type('application/json');
      return this.res.status(200).json(dto);
    } else {
      return this.res.sendStatus(200);
    }
  }

  public created () {
    return this.res.sendStatus(201);
  }

  public clientError (message?: string) {
    return this.jsonResponse(400, message ? message : 'Unauthorized');
  }

  public unauthorized (message?: string) {
    return this.jsonResponse(401, message ? message : 'Unauthorized');
  }

  public paymentRequired (message?: string) {
    return this.jsonResponse(402, message ? message : 'Payment required');
  }

  public forbidden (message?: string) {
    return this.jsonResponse(403, message ? message : 'Forbidden');
  }

  public notFound (message?: string) {
    return this.jsonResponse(404, message ? message : 'Not found');
  }

  public conflict (message?: string) {
    return this.jsonResponse(409, message ? message : 'Conflict');
  }

  public tooMany (message?: string) {
    return this.jsonResponse(429, message ? message : 'Too many requests');
  }

  public todo (res: express.Response) {
    return this.jsonResponse(400, 'TODO');
  }

  public fail (error: Error | string) {
    console.log(error);
    return this.res.status(500).json({
      message: error.toString()
    })
  }
  
}
