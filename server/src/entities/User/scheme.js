//
// Entity User: scheme
//

module.exports = {
  root: `
    type UserType {
      id: ID
      name: String
      regdate: String
      # password: String = hash
    }
    
    input AddUserIn {
      name: String!
      password: String!
    }
    
    input SetUserIn {
      name: String
      password: String
    }
    
  `,
  query: `
    getUsers(filter: String): [UserType]
  `,
  mutation: `
    addUser(user: AddUserIn!): UserType
    setUserById(id: ID!, fields: SetUserIn!): UserType
    delUserById(id: ID!): UserType
  `
};