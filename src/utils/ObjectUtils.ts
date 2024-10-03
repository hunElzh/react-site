class ObjectUtil {

    /**
     * 处理对象数据，将其中的[]转换成字符串
     */
    public static ObjectArrayToString = (obj: {[key:string]: any}) => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key];
                // 如果属性值是数组，则遍历数组中的每一个元素并转换为字符串
                if (Array.isArray(value)) {
                    obj[key] = value.map(item => String(item));
                }
                // 其他情况直接转换为字符串
                else {
                    obj[key] = String(value);
                }
            }
        }
    }

}

export default ObjectUtil;