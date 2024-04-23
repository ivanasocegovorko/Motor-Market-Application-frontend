export class User {
        userId?: number;
        email?: string;
        Password?: string;
        FirstName?: string;
        LastName?: string;
        Bio?: string;
        Location?: string;

        constructor(UserId?: number, Email?: string, Password?: string, FirstName?: string, LastName?: string, Bio?: string, Location?: string) {
          this.userId = UserId;
          this.email = Email;
          this.Password = Password;
          this.FirstName = FirstName;
          this.LastName = LastName;
          this.Bio = Bio;
          this.Location = Location;
        }
    }

