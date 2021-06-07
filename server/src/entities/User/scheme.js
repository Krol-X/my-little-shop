//
// Entity User: scheme
//

module.exports = {
  root: `
    input UserInReq {
      name: String!
      password: String!
      role: String!
    }
  
    type UserOut {
      name: String
      role: String
      regdate: String
      password: String # hash
    }
    
    input UserIn {
      name: String
      password: String
      role: String
    }
    
    input LoginIn {
      name: String!
      password: String!
    }
    
    type LoginOut {
      name: String
      token: String
    }
    
    type AuthOut {
      name: String
      role: String
      regdate: String
    }
  `,
  query: `
    getUsers(t: String!, filter: String): [UserOut]
    # Public methods
    loginUser(info: LoginIn!): LoginOut
    authUser(token: String!): AuthOut
  `,
  mutation: `
    addUser(t: String!, info: UserInReq!): UserOut
    setUser(t: String!, name: String!, info: UserIn!): UserOut
    delUser(t: String!, name: String!): UserOut
    # Public methods
    registerUser(info: LoginIn!): LoginOut
  `
};