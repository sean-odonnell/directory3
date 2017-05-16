
var db = connect('localhost:27017/companies_db');

mongod

use products

db.createUser(
   {
     user: "accountUser",
     pwd: "password",
     roles: [ "readWrite", "dbAdmin" ]
   }
)

db.companies = {
				id: 1,
				name: 'Xerox'
				address: '123 Main Street, Rochester, NY 12345'
				phone: '585-555-1234',
				revenue: 10000,
				employees: {
					id: 1.1,
					name: 'John Smith',
					address: this.this.address,
					company: this.this.name
				},
				{
					id: 1.2,
					name: 'Sally Jones',
					address: this.this.address,
					company: this.this.name
				},
				{
					id: 1.3,
					name: 'Mike Johnson',
					address: this.this.address,
					company: this.this.name
				},
				{
					id: 1.4,
					name: 'Rachel Samson',
					address: this.this.address,
					company: this.this.name
				},
				{
					id: 1.5,
					name: 'Tina Belcher',
					address: this.this.address,
					company: this.this.name
				}
			   },

			   {
			   	id: 2,
			   	name: 'Kodak'
			   	address: '456 South Street, Rochester, NY 12345',
			   	phone: '585-555-5678',
			   	revenue: 20000,
			   	employees {
			   		id: 2.1,
			   		name: '',
			   		address: this.this.address,
			   		company: this.this.company,
			   	}
			   },
			   {
			   	name: SigFig,
			   	address: '225 Valencia St, San Francisco, CA 94103',
			   	phone: '855-9-SIGFIG',
			   	revenue: 14500,
			   	employees: {
				   		id: 3.1,
				   		name: 'Mike Sha',
				   		address: this.this.address,
				   		company: this.this.company
				   	},
				   	{
				   		id: 3.2,
				   		name: 'Terry Banet',
				   		address: this.this.address,
				   		company: this.this.company
				   	},
				   	{
				   		id: 3.3,
				   		name: 'Aaron Gubin',
				   		address: this.this.address,
				   		company: this.this.company
				   	},
				   	{
				   		id: 3.4,
				   		name: 'Roger Fong',
				   		address: this.this.address,
				   		company: this.this.company
				   	},
				   	{
				   		id: 3.5,
				   		name: 'Thomas Pueyo',
				   		address: this.this.address,
				   		company: this.this.company
				   	},
				   	{
				   		id: 3.6,
				   		name: 'Evan Meagher, CFA',
				   		address: this.this.address,
				   		company: this.this.company
				   	}

			   }	