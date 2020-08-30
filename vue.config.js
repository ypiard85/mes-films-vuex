module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/films/another-oh-hae-young'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
