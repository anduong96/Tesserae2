import chalk from 'chalk'

export const boldUnderline = (message, color) => chalk[color || 'yellow'].underline.bold(message)

export default {
    boldUnderline
}
