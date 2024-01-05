import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #B2C9BF
		'--color-primary-50': '243 247 245', // #f3f7f5
		'--color-primary-100': '240 244 242', // #f0f4f2
		'--color-primary-200': '236 242 239', // #ecf2ef
		'--color-primary-300': '224 233 229', // #e0e9e5
		'--color-primary-400': '201 217 210', // #c9d9d2
		'--color-primary-500': '178 201 191', // #B2C9BF
		'--color-primary-600': '160 181 172', // #a0b5ac
		'--color-primary-700': '134 151 143', // #86978f
		'--color-primary-800': '107 121 115', // #6b7973
		'--color-primary-900': '87 98 94', // #57625e
		// secondary | #396A66
		'--color-secondary-50': '225 233 232', // #e1e9e8
		'--color-secondary-100': '215 225 224', // #d7e1e0
		'--color-secondary-200': '206 218 217', // #cedad9
		'--color-secondary-300': '176 195 194', // #b0c3c2
		'--color-secondary-400': '116 151 148', // #749794
		'--color-secondary-500': '57 106 102', // #396A66
		'--color-secondary-600': '51 95 92', // #335f5c
		'--color-secondary-700': '43 80 77', // #2b504d
		'--color-secondary-800': '34 64 61', // #22403d
		'--color-secondary-900': '28 52 50', // #1c3432
		// tertiary | #67AAAD
		'--color-tertiary-50': '232 242 243', // #e8f2f3
		'--color-tertiary-100': '225 238 239', // #e1eeef
		'--color-tertiary-200': '217 234 235', // #d9eaeb
		'--color-tertiary-300': '194 221 222', // #c2ddde
		'--color-tertiary-400': '149 196 198', // #95c4c6
		'--color-tertiary-500': '103 170 173', // #67AAAD
		'--color-tertiary-600': '93 153 156', // #5d999c
		'--color-tertiary-700': '77 128 130', // #4d8082
		'--color-tertiary-800': '62 102 104', // #3e6668
		'--color-tertiary-900': '50 83 85', // #325355
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #237953
		'--color-surface-50': '222 235 229', // #deebe5
		'--color-surface-100': '211 228 221', // #d3e4dd
		'--color-surface-200': '200 222 212', // #c8ded4
		'--color-surface-300': '167 201 186', // #a7c9ba
		'--color-surface-400': '101 161 135', // #65a187
		'--color-surface-500': '35 121 83', // #237953
		'--color-surface-600': '32 109 75', // #206d4b
		'--color-surface-700': '26 91 62', // #1a5b3e
		'--color-surface-800': '21 73 50', // #154932
		'--color-surface-900': '17 59 41' // #113b29
	}
};
