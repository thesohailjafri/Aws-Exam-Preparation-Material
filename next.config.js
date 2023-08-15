const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#f00' },
  lessVarsFilePath: './src/styles/variables.less',

  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.module = false
    }

    return config
  },
})
