interface AccountDetails {
    firstname: string;
    lastname: string;
}

interface CheckingAccountDetails extends AccountDetails {
    route: number;
    overdraft: number;
    accountHolder: string;
}

class AccountY {

    constructor(protected firstname: string, protected lastname: string) { }

    protected getAccountHolder(): string {
        return this.firstname + ' ' + this.lastname;
    }

}

class CheckingAccountY extends AccountY {

    constructor(firstname: string, lastname: string, private route: number, private overdraft: number) {
        super(firstname, lastname);
    }

    getAccountData(): CheckingAccountDetails {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            route: this.route,
            overdraft: this.overdraft,
            accountHolder: this.firstname + ' ' + this.lastname
        }
    }

}

const ckAccount = new CheckingAccountY('John', 'Smith', 123456, 50);
const ckAccountDetails = ckAccount.getAccountData();
console.log(`
    Checking Account Details:
    First Name: ${ckAccountDetails.firstname}
    Last Name: ${ckAccountDetails.lastname}
    Account Holder: ${ckAccountDetails.accountHolder}
    Route: ${ckAccountDetails.route}
    Overdraft: ${ckAccountDetails.overdraft}
`);