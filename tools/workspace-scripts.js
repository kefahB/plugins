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
			// @kefah/autocomplete
			'autocomplete': {
				build: {
					script: 'nx run autocomplete:build.all',
					description: '@kefah/autocomplete: Build',
				},
			},
			// @kefah/switcher
			'switcher': {
				build: {
					script: 'nx run switcher:build.all',
					description: '@kefah/switcher: Build',
				},
			},
			// @kefah/otp
			'nativescript-otp': {
				build: {
					script: 'nx run nativescript-otp:build.all',
					description: '@kefah/nativescript-otp: Build',
				},
			},
			// @kefah/language-switcher
			'language-switcher': {
				build: {
					script: 'nx run language-switcher:build.all',
					description: '@kefah/language-switcher: Build',
				},
			},
			// @kefah/nativescript-language-switcher
			'nativescript-language-switcher': {
				build: {
					script: 'nx run nativescript-language-switcher:build.all',
					description: '@kefah/nativescript-language-switcher: Build',
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
			'autocomplete': {
				script: 'nx run autocomplete:focus',
				description: 'Focus on @kefah/autocomplete',
			},
			'switcher': {
				script: 'nx run switcher:focus',
				description: 'Focus on @kefah/switcher',
			},
			'nativescript-otp': {
				script: 'nx run nativescript-otp:focus',
				description: 'Focus on @kefah/nativescript-otp',
			},
			'language-switcher': {
				script: 'nx run language-switcher:focus',
				description: 'Focus on @kefah/language-switcher',
			},
			'nativescript-language-switcher': {
				script: 'nx run nativescript-language-switcher:focus',
				description: 'Focus on @kefah/nativescript-language-switcher',
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
