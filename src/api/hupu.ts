
import RequestUtil from './request'
import { hupuImage } from '../model/hupu/hupuModel'
export default class Hupu {
    util: any
    constructor() {
        this.util = new RequestUtil()
    }

    getMobileImages() {
        return RequestUtil.get<Array<hupuImage>>('https://www.popochiu.com/hupu/getMobileImages')
    }
}
