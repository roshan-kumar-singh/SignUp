// user.model.ts

export class User {
    constructor(
    private  password: string,
    private firstName: string,
    private lastName: string,
    private emailId: string,
    private role: string,
    private mobile: string,
    ){}
  }
  