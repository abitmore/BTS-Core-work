Types.extension = function(st_operation){
    v.required(st_operation, "st_operation");
    return {
    fromByteBuffer(b){
        var object = {};
        var count = b.readVarint32();
        for( var i = 0; i < count; i++ ) {
            var index = b.readVarint32();
            var j = 0;
            for( var name in st_operation.types ) {
                if( j == index ) {
                    v.required( st_operation.types[name].st_operation );
                    object[name] = st_operation.types[name].st_operation().fromByteBuffer(b);
                    break;
                }
                j++;
            }
        }
        return object;
    },
    appendByteBuffer(b, object){
        v.required(object);
        var count = 0;
        for( var name in object ) {
            if( object[name] != null && object[name] != undefined )
                count++;
        }
        b.writeVarint32(count);
        var index = 0;
        for( var name in object ) {
            if( object[name] != null && object[name] != undefined ) {
                b.writeVarint32(index);
                v.required( st_operation.types[name].st_operation );
                st_operation.types[name].st_operation().appendByteBuffer(b, object[name]);
            }
            index++;
        }
        return;
    },
    fromObject(object){
        return st_operation.fromObject(object);
    },
    toObject(object, debug = {}){
        return st_operation.toObject(object, debug);
    }
    };
};
