
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #C2CF7C 
		"--color-primary-50": "246 248 235", // #f6f8eb
		"--color-primary-100": "243 245 229", // #f3f5e5
		"--color-primary-200": "240 243 222", // #f0f3de
		"--color-primary-300": "231 236 203", // #e7eccb
		"--color-primary-400": "212 221 163", // #d4dda3
		"--color-primary-500": "194 207 124", // #C2CF7C
		"--color-primary-600": "175 186 112", // #afba70
		"--color-primary-700": "146 155 93", // #929b5d
		"--color-primary-800": "116 124 74", // #747c4a
		"--color-primary-900": "95 101 61", // #5f653d
		// secondary | #4B0B52 
		"--color-secondary-50": "228 218 229", // #e4dae5
		"--color-secondary-100": "219 206 220", // #dbcedc
		"--color-secondary-200": "210 194 212", // #d2c2d4
		"--color-secondary-300": "183 157 186", // #b79dba
		"--color-secondary-400": "129 84 134", // #815486
		"--color-secondary-500": "75 11 82", // #4B0B52
		"--color-secondary-600": "68 10 74", // #440a4a
		"--color-secondary-700": "56 8 62", // #38083e
		"--color-secondary-800": "45 7 49", // #2d0731
		"--color-secondary-900": "37 5 40", // #250528
		// tertiary | #C2CF7C 
		"--color-tertiary-50": "246 248 235", // #f6f8eb
		"--color-tertiary-100": "243 245 229", // #f3f5e5
		"--color-tertiary-200": "240 243 222", // #f0f3de
		"--color-tertiary-300": "231 236 203", // #e7eccb
		"--color-tertiary-400": "212 221 163", // #d4dda3
		"--color-tertiary-500": "194 207 124", // #C2CF7C
		"--color-tertiary-600": "175 186 112", // #afba70
		"--color-tertiary-700": "146 155 93", // #929b5d
		"--color-tertiary-800": "116 124 74", // #747c4a
		"--color-tertiary-900": "95 101 61", // #5f653d
		// success | #CF8E7C 
		"--color-success-50": "248 238 235", // #f8eeeb
		"--color-success-100": "245 232 229", // #f5e8e5
		"--color-success-200": "243 227 222", // #f3e3de
		"--color-success-300": "236 210 203", // #ecd2cb
		"--color-success-400": "221 176 163", // #ddb0a3
		"--color-success-500": "207 142 124", // #CF8E7C
		"--color-success-600": "186 128 112", // #ba8070
		"--color-success-700": "155 107 93", // #9b6b5d
		"--color-success-800": "124 85 74", // #7c554a
		"--color-success-900": "101 70 61", // #65463d
		// warning | #7CCFA5 
		"--color-warning-50": "235 248 242", // #ebf8f2
		"--color-warning-100": "229 245 237", // #e5f5ed
		"--color-warning-200": "222 243 233", // #def3e9
		"--color-warning-300": "203 236 219", // #cbecdb
		"--color-warning-400": "163 221 192", // #a3ddc0
		"--color-warning-500": "124 207 165", // #7CCFA5
		"--color-warning-600": "112 186 149", // #70ba95
		"--color-warning-700": "93 155 124", // #5d9b7c
		"--color-warning-800": "74 124 99", // #4a7c63
		"--color-warning-900": "61 101 81", // #3d6551
		// error | #d728a9 
		"--color-error-50": "249 223 242", // #f9dff2
		"--color-error-100": "247 212 238", // #f7d4ee
		"--color-error-200": "245 201 234", // #f5c9ea
		"--color-error-300": "239 169 221", // #efa9dd
		"--color-error-400": "227 105 195", // #e369c3
		"--color-error-500": "215 40 169", // #d728a9
		"--color-error-600": "194 36 152", // #c22498
		"--color-error-700": "161 30 127", // #a11e7f
		"--color-error-800": "129 24 101", // #811865
		"--color-error-900": "105 20 83", // #691453
		// surface | #963F7F 
		"--color-surface-50": "239 226 236", // #efe2ec
		"--color-surface-100": "234 217 229", // #ead9e5
		"--color-surface-200": "229 207 223", // #e5cfdf
		"--color-surface-300": "213 178 204", // #d5b2cc
		"--color-surface-400": "182 121 165", // #b679a5
		"--color-surface-500": "150 63 127", // #963F7F
		"--color-surface-600": "135 57 114", // #873972
		"--color-surface-700": "113 47 95", // #712f5f
		"--color-surface-800": "90 38 76", // #5a264c
		"--color-surface-900": "74 31 62", // #4a1f3e
		
	}
}