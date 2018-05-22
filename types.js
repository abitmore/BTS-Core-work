Types.extension = function (st_operation) {
    v.required(st_operation, "st_operation");
    return {
        fromByteBuffer(b){
            let result = {};
            let count = b.readVarint32();
            for (let i = 0; i < count; i++) {
                let index = b.readVarint32();
                let j = 0;
                for (let n in st_operation.keys) {
                    let name = st_operation.keys[n];
                    if (j == index) {
                        v.required( st_operation.types[name].st_operation );
                        result[name] = st_operation.types[name].getOperation().fromByteBuffer(b);
                        break;
                    }
                    j++;
                }
            }
            return result;
        },
        appendByteBuffer(b, object){
            v.required(object);
            let count = 0;
            for (let name in object) {
                if (object[name] != null && object[name] != undefined) {
                    count++;
                }
            }

            b.writeVarint32(count);
            let name = null;
            for (let n = 0; n < st_operation.keys.length; n++) {
                name = st_operation.keys[n];
                if (object[name] != null && object[name] != undefined) {
                    v.required( st_operation.types[name].getOperation() );
                    b.writeVarint32(n);
                    //console.log("st_operation.types[name]",st_operation.types[name])
                    st_operation.types[name].getOperation().appendByteBuffer(b, object[name]);
                }
            }
            return;
        },
        fromObject(object){
            if (object === undefined) {
                return undefined;
            }
            return st_operation.fromObject(object);
        },
        toObject(object, debug = {}){
            var result_object = (() => {
                if (!debug.use_default && object === undefined) {
                    return undefined;
                } else {
                    return st_operation.toObject(object, debug);
                }
            })();

            if (debug.annotate) {
                if (typeof result_object === "object") {
                    result_object.__optional = "parent is optional";
                } else {
                    result_object = {__optional: result_object};
                }
            }
            return result_object;
        }
    };
}

