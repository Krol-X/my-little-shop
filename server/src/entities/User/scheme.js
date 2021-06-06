//
// Entity User: scheme
//

module.exports = {
  root: `
    type UserType {
      id: ID
      name: String
      role: String
      regdate: String
      # password: String # hash
    }
    
    input UserIn {
      name: String
      password: String
      role: String
    }
    
    input UserInReq {
      name: String!
      password: String!
      role: String!
    }
    
    input LoginIn {
      name: String!
      password: String!
    }
    
    type LoginOut {
      id: ID
      name: String
      regdate: String
      token: String
    }
    
  `,
  query: `
    getUsers(t: String!, filter: String): [UserType]
    # Public methods
    loginUser(info: LoginIn!): LoginOut
    authUser(token: String!): LoginOut
  `,
  mutation: `
    addUser(t: String!, info: UserInReq!): UserType
    setUserById(t: String!, id: ID!, info: UserIn!): UserType
    delUserById(t: String!, id: ID!): UserType
    # Public methods
    registerUser(info: LoginIn!): LoginOut
  `
};