module.exports.buildScheme = (schemes) => {
  let result = '', queries = '', mutations = '';

  schemes.forEach(x => {
    result = result.concat(x.root.trim());
    queries = queries.concat(x.query.trim());
    mutations = mutations.concat(x.mutation.trim());
  });

  return result.concat('\n',
    queries !== ''? `type Query { ${queries} }`: '',
    mutations !== ''? `type Mutation { ${mutations} }`: ''
  );
};