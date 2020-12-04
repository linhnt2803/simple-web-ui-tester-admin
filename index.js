const tester = require("simple-web-ui-tester");
const { stringNotEmpty, stringLengthMinMax, validateAll } = require("simple-web-ui-tester/modules/utils/validator")

function test() {
  tester.addActionSetting('capture_screen', {
    metaKeys: ['path'],
    templateCommand: "capture_screen to <<path>>",
    regexCommand: /^capture_screen to <<(?<path>.*)>>(?<note>.*)$/,
    metaValidator: function (meta) {
      let { path } = meta;
      return validateAll([
        stringNotEmpty("path")(path),
        stringLengthMinMax("path", 1, 512)(path)
      ]);
    },
    handler: async function (meta, page) {
      let { path } = meta;
      let startTime = Date.now();
      await page.screenshot({ path: path })
        .catch(err => {
          if (err.message) {
            err.message = `capture_screen Error: ${err.message}`
          }
          throw err
        });

      return {
        summary: `capture_screen to <<${path}>>`,
        duration: Date.now() - startTime,
      };
    },
  })

  const actionsData = [
    "go_to <<https://www.google.com.vn>>",
    "input_to <<input[name='q']>> value <<simple-web-ui-tester npm>>",
    "click_on <<input[name='btnK']>>",
    "capture_screen to <<screen.png>>",
    "wait <<3000>>",
  ];

  return tester.formatThenRunActions(actionsData);
}

test().then(console.log).catch(console.error);
