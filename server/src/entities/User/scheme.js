//
// Entity User: scheme
//

module.exports = {
  root: `
    type User {
      id: ID
      name: String
      role: String
      password: String
      GetMany(filter: String): User
    }
    
    # input...
  `,
  query: `
    getAllUsers: [User]
  `,
  mutation: `
  
  `
};