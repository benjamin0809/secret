
type JsonObject = {
    [key: string] : any
}
interface HttpOption {
    method:  "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
    data?: JsonObject
    header?: JsonObject 
    callback?: {
        func: Function,
        context: any
    }
    
}
export default class RequestUtil {

    static get<T>(url: string) {
        return this.request<T>(url,{
            method: "GET"
        })
    }

    static request<T>(url: string, option: HttpOption): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            uni.request({
                url,
                data: option.data,
                method: option.method,
                header: option.header,
                success: (res) => { 
                    resolve(<T>res.data)
                },
                fail: (error) => {
                    reject(error)
                },
                complete: (res) => { 
                    if(option.callback && option.callback.func) {
                        if(typeof option.callback.func !== 'function') {
                            console.warn(option.callback.func,'must be function')
                        }else {
                            let ctx = option.callback.context || option.callback.func
                            option.callback.func.call(ctx, res)
                        } 
                    }
                }

            }); 
        })

    }
}
