//
// Tools
//

module.exports.buildScheme = (schemes) => {
  let result = '', queries = '', mutations = '';

  schemes.forEach(x => {
    result = result.concat(x.root, '\n');
    queries = queries.concat(x.query, '\n');
    mutations = mutations.concat(x.mutation, '\n');
  });

  return result.concat(
    queries !== ''? `\ntype Query { ${queries}}`: '',
    mutations !== ''? `\ntype Mutation { ${mutations}}`: ''
  );
};