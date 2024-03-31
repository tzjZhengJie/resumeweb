
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
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #bb86fc 
		"--color-primary-50": "245 237 255", // #f5edff
		"--color-primary-100": "241 231 254", // #f1e7fe
		"--color-primary-200": "238 225 254", // #eee1fe
		"--color-primary-300": "228 207 254", // #e4cffe
		"--color-primary-400": "207 170 253", // #cfaafd
		"--color-primary-500": "187 134 252", // #bb86fc
		"--color-primary-600": "168 121 227", // #a879e3
		"--color-primary-700": "140 101 189", // #8c65bd
		"--color-primary-800": "112 80 151", // #705097
		"--color-primary-900": "92 66 123", // #5c427b
		// secondary | #3700B3 
		"--color-secondary-50": "225 217 244", // #e1d9f4
		"--color-secondary-100": "215 204 240", // #d7ccf0
		"--color-secondary-200": "205 191 236", // #cdbfec
		"--color-secondary-300": "175 153 225", // #af99e1
		"--color-secondary-400": "115 77 202", // #734dca
		"--color-secondary-500": "55 0 179", // #3700B3
		"--color-secondary-600": "50 0 161", // #3200a1
		"--color-secondary-700": "41 0 134", // #290086
		"--color-secondary-800": "33 0 107", // #21006b
		"--color-secondary-900": "27 0 88", // #1b0058
		// tertiary | #03dac6 
		"--color-tertiary-50": "217 249 246", // #d9f9f6
		"--color-tertiary-100": "205 248 244", // #cdf8f4
		"--color-tertiary-200": "192 246 241", // #c0f6f1
		"--color-tertiary-300": "154 240 232", // #9af0e8
		"--color-tertiary-400": "79 229 215", // #4fe5d7
		"--color-tertiary-500": "3 218 198", // #03dac6
		"--color-tertiary-600": "3 196 178", // #03c4b2
		"--color-tertiary-700": "2 164 149", // #02a495
		"--color-tertiary-800": "2 131 119", // #028377
		"--color-tertiary-900": "1 107 97", // #016b61
		// success | #66BB6A 
		"--color-success-50": "232 245 233", // #e8f5e9
		"--color-success-100": "224 241 225", // #e0f1e1
		"--color-success-200": "217 238 218", // #d9eeda
		"--color-success-300": "194 228 195", // #c2e4c3
		"--color-success-400": "148 207 151", // #94cf97
		"--color-success-500": "102 187 106", // #66BB6A
		"--color-success-600": "92 168 95", // #5ca85f
		"--color-success-700": "77 140 80", // #4d8c50
		"--color-success-800": "61 112 64", // #3d7040
		"--color-success-900": "50 92 52", // #325c34
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #CF6679 
		"--color-error-50": "248 232 235", // #f8e8eb
		"--color-error-100": "245 224 228", // #f5e0e4
		"--color-error-200": "243 217 222", // #f3d9de
		"--color-error-300": "236 194 201", // #ecc2c9
		"--color-error-400": "221 148 161", // #dd94a1
		"--color-error-500": "207 102 121", // #CF6679
		"--color-error-600": "186 92 109", // #ba5c6d
		"--color-error-700": "155 77 91", // #9b4d5b
		"--color-error-800": "124 61 73", // #7c3d49
		"--color-error-900": "101 50 59", // #65323b
		// surface | #121212 
		"--color-surface-50": "219 219 219", // #dbdbdb
		"--color-surface-100": "208 208 208", // #d0d0d0
		"--color-surface-200": "196 196 196", // #c4c4c4
		"--color-surface-300": "140 140 140", // #a0a0a0
		"--color-surface-400": "89 89 89", // #595959
		"--color-surface-500": "18 18 18", // #121212
		"--color-surface-600": "16 16 16", // #101010
		"--color-surface-700": "14 14 14", // #0e0e0e
		"--color-surface-800": "11 11 11", // #0b0b0b
		"--color-surface-900": "9 9 9", // #090909
		
	}
}