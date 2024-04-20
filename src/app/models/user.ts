export class User {
        email?: string;
        Password?: string;
        FirstName?: string;
        LastName?: string;
        Bio?: string;
        Location?: string;

        constructor(Email?: string, Password?: string, FirstName?: string, LastName?: string, Bio?: string, Location?: string) {
          this.email = Email;
          this.Password = Password;
          this.FirstName = FirstName;
          this.LastName = LastName;
          this.Bio = Bio;
          this.Location = Location;
        }
    }

