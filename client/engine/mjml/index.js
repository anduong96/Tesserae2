import { mjmlTemplate, MJML } from './basics'
import { mjmlHeader } from './header'
import { mjmlBody } from './body'

export const makeMJML = ({ contents }) => (
    mjmlTemplate({
        tag: MJML.MJML,
        children: [
            mjmlHeader(),
            mjmlBody({ contents })
        ]
    })
)
