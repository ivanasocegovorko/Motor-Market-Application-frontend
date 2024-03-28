export class User {
        Email?: string;
        Password?: string;
        FirstName?: string;
        LastName?: string;
        Bio?: string;
        Location?: string;

        constructor(Email?: string, Password?: string, FirstName?: string, LastName?: string, Bio?: string, Location?: string) {
          this.Email = Email;
          this.Password = Password;
          this.FirstName = FirstName;
          this.LastName = LastName;
          this.Bio = Bio;
          this.Location = Location;
        }
    }

