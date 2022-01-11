const npsUtils = require('nps-utils');

module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@kefah/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @kefah/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@kefah': {
      // @kefah/nativescript-uuid
      'nativescript-uuid': {
        build: {
          script: 'nx run nativescript-uuid:build.all',
          description: '@kefah/nativescript-uuid: Build',
        },
      },
      // @kefah/nativescript-google-maps
			'nativescript-google-maps': {
				build: {
					script: 'nx run nativescript-google-maps:build.all',
					description: '@kefah/nativescript-google-maps: Build',
				},
			},
			'build-all': {
        script: 'nx run all:build',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-uuid': {
        script: 'nx run nativescript-uuid:focus',
        description: 'Focus on @kefah/nativescript-uuid',
      },
      'nativescript-google-maps': {
				script: 'nx run nativescript-google-maps:focus',
				description: 'Focus on @kefah/nativescript-google-maps',
			},
			reset: {
        script: 'nx run all:focus',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};