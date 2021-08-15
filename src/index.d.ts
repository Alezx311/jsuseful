export { Constants } from './Constants'
export { Check } from './Check'
export { Random } from './Random'
export { Values } from './Values'
export { JsUseful } from './index'

import { Constants as constants } from './Constants'
import { Check as check } from './Check'
import { Random as random } from './Random'
import { Values as values } from './Values'
import { JsUseful as jsUseful } from './index'

export namespace jsuseful {
	export class Check extends check {}
	export class Random extends random {}
	export class Values extends values {}
	export class Constants extends constants {}
	export class JsUseful extends jsUseful {}
}

declare module 'jsuseful' {
	export class Check extends check {}
	export class Random extends random {}
	export class Values extends values {}
	export class Constants extends constants {}
	export class JsUseful extends jsUseful {}
}
