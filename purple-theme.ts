
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1331f2 
		"--color-primary-50": "220 224 253", // #dce0fd
		"--color-primary-100": "208 214 252", // #d0d6fc
		"--color-primary-200": "196 204 252", // #c4ccfc
		"--color-primary-300": "161 173 250", // #a1adfa
		"--color-primary-400": "90 111 246", // #5a6ff6
		"--color-primary-500": "19 49 242", // #1331f2
		"--color-primary-600": "17 44 218", // #112cda
		"--color-primary-700": "14 37 182", // #0e25b6
		"--color-primary-800": "11 29 145", // #0b1d91
		"--color-primary-900": "9 24 119", // #091877
		// secondary | #500c26 
		"--color-secondary-50": "229 219 222", // #e5dbde
		"--color-secondary-100": "220 206 212", // #dcced4
		"--color-secondary-200": "211 194 201", // #d3c2c9
		"--color-secondary-300": "185 158 168", // #b99ea8
		"--color-secondary-400": "133 85 103", // #855567
		"--color-secondary-500": "80 12 38", // #500c26
		"--color-secondary-600": "72 11 34", // #480b22
		"--color-secondary-700": "60 9 29", // #3c091d
		"--color-secondary-800": "48 7 23", // #300717
		"--color-secondary-900": "39 6 19", // #270613
		// tertiary | #eec030 
		"--color-tertiary-50": "252 246 224", // #fcf6e0
		"--color-tertiary-100": "252 242 214", // #fcf2d6
		"--color-tertiary-200": "251 239 203", // #fbefcb
		"--color-tertiary-300": "248 230 172", // #f8e6ac
		"--color-tertiary-400": "243 211 110", // #f3d36e
		"--color-tertiary-500": "238 192 48", // #eec030
		"--color-tertiary-600": "214 173 43", // #d6ad2b
		"--color-tertiary-700": "179 144 36", // #b39024
		"--color-tertiary-800": "143 115 29", // #8f731d
		"--color-tertiary-900": "117 94 24", // #755e18
		// success | #3c3794 
		"--color-success-50": "226 225 239", // #e2e1ef
		"--color-success-100": "216 215 234", // #d8d7ea
		"--color-success-200": "206 205 228", // #cecde4
		"--color-success-300": "177 175 212", // #b1afd4
		"--color-success-400": "119 115 180", // #7773b4
		"--color-success-500": "60 55 148", // #3c3794
		"--color-success-600": "54 50 133", // #363285
		"--color-success-700": "45 41 111", // #2d296f
		"--color-success-800": "36 33 89", // #242159
		"--color-success-900": "29 27 73", // #1d1b49
		// warning | #d268eb 
		"--color-warning-50": "248 232 252", // #f8e8fc
		"--color-warning-100": "246 225 251", // #f6e1fb
		"--color-warning-200": "244 217 250", // #f4d9fa
		"--color-warning-300": "237 195 247", // #edc3f7
		"--color-warning-400": "224 149 241", // #e095f1
		"--color-warning-500": "210 104 235", // #d268eb
		"--color-warning-600": "189 94 212", // #bd5ed4
		"--color-warning-700": "158 78 176", // #9e4eb0
		"--color-warning-800": "126 62 141", // #7e3e8d
		"--color-warning-900": "103 51 115", // #673373
		// error | #51f869 
		"--color-error-50": "229 254 233", // #e5fee9
		"--color-error-100": "220 254 225", // #dcfee1
		"--color-error-200": "212 253 218", // #d4fdda
		"--color-error-300": "185 252 195", // #b9fcc3
		"--color-error-400": "133 250 150", // #85fa96
		"--color-error-500": "81 248 105", // #51f869
		"--color-error-600": "73 223 95", // #49df5f
		"--color-error-700": "61 186 79", // #3dba4f
		"--color-error-800": "49 149 63", // #31953f
		"--color-error-900": "40 122 51", // #287a33
		// surface | #362db9 
		"--color-surface-50": "225 224 245", // #e1e0f5
		"--color-surface-100": "215 213 241", // #d7d5f1
		"--color-surface-200": "205 203 238", // #cdcbee
		"--color-surface-300": "175 171 227", // #afabe3
		"--color-surface-400": "114 108 206", // #726cce
		"--color-surface-500": "54 45 185", // #362db9
		"--color-surface-600": "49 41 167", // #3129a7
		"--color-surface-700": "41 34 139", // #29228b
		"--color-surface-800": "32 27 111", // #201b6f
		"--color-surface-900": "26 22 91", // #1a165b
		
	}
}