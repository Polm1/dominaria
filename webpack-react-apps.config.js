// eslint-disable-next-line @typescript-eslint/no-var-requires
const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function.

module.exports = (config, context) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs,

  console.log(
    '\x1b[33m%s\x1b[0m',
    `
  *************************************************************************

    ⛔️ Custom Webpack configuration to fix SVGR until this PR gets merged:
    🐙 https://github.com/nrwl/nx/pull/4327

    🙏 If you read this warning, please periodically check the PR status!

  *************************************************************************
  `,
  );

  const svgRuleIndex = config.module.rules.findIndex((rule) => {
    const { test } = rule;

    return test.toString().startsWith('/\\.svg$/');
  });

  const svgrIssuerIndex = config.module.rules[svgRuleIndex].oneOf.findIndex((item) => {
    const { issuer } = item;

    if (issuer) {
      const { test } = issuer;

      return test.toString().startsWith('/\\.[jt]sx?$/');
    }

    return -1;
  });

  config.module.rules[svgRuleIndex].oneOf[svgrIssuerIndex].use[0] = {
    loader: require.resolve('@svgr/webpack'),
    options: {
      svgo: false,
      titleProp: true,
      ref: true,
    },
  };

  return config;
};
