export { JsUseful } from './index'
export { Functions } from './Functions'
export { Text } from './Text'
export { Constants } from './Constants'
export { Random } from './Random'
export { Values } from './Values'

import { Constants as constants } from './Constants'
import { Functions as functions } from './Functions'
import { Text as text } from './Text'
import { Random as random } from './Random'
import { Values as values } from './Values'
import { JsUseful as jsUseful } from './index'

export namespace jsuseful {
	export class Functions extends functions {}
	export class Text extends text {}
	export class Random extends random {}
	export class Values extends values {}
	export class JsUseful extends jsUseful {}
}

declare module 'jsuseful' {
	export class Constants extends constants {}
	export class Functions extends functions {}
	export class Text extends text {}
	export class Random extends random {}
	export class Values extends values {}
	export class JsUseful extends jsUseful {}
}

export default jsUseful
