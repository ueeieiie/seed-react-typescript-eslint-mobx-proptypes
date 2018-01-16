module.exports = {
	"parser": "babel-eslint",
    "extends": ["airbnb", "plugin:react/recommended"],
    "plugins": ["react"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
    },
    "rules": {
        "indent": [2, 'tab'],
        "linebreak-style": 0,
        "comma-dangle": 0,
		"no-tabs": 0,
		"no-trailing-spaces": 0,
		"import/prefer-default-export": 0,
		"template-curly-spacing": 0,
		"arrow-parens": 0,
		"object-curly-newline": ["error", {
			"ObjectExpression": "always",
			"ObjectPattern": "never"
		}],

        // React's
        "react/jsx-indent": [2, 'tab'],
		"react/jsx-indent-props": [2, 'tab'],
		"react/forbid-prop-types": 0,
		// "react/prefer-stateless-function": 1,
		"react/prop-types": 2
    }
};
